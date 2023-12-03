#!/usr/bin/env node

import * as core from "@arethetypeswrong/core";
import { groupProblemsByKind, parsePackageSpec } from "@arethetypeswrong/core/utils";
import { versions } from "@arethetypeswrong/core/versions";
import chalk from "chalk";
import { execSync } from "child_process";
import { Option, program } from "commander";
import { readFile, stat, unlink } from "fs/promises";
import { createRequire } from "module";
import path from "path";
import readline from "readline";
import { problemFlags } from "./problemUtils.js";
import { readConfig } from "./readConfig.js";
import * as render from "./render/index.js";
import { major, minor } from "semver";

const packageJson = createRequire(import.meta.url)("../package.json");
const version = packageJson.version;

const formats = ["auto", "table", "table-flipped", "ascii", "json"] as const;

type Format = (typeof formats)[number];

export interface Opts {
  pack?: boolean;
  fromNpm?: boolean;
  definitelyTyped?: boolean | string;
  summary?: boolean;
  emoji?: boolean;
  color?: boolean;
  quiet?: boolean;
  configPath?: string;
  ignoreRules?: string[];
  format: Format;

  entrypoints?: string[];
  includeEntrypoints?: string[];
  excludeEntrypoints?: string[];
}

program
  .addHelpText("before", `ATTW CLI (v${version})\n`)
  .addHelpText("after", `\ncore: v${versions.core}, typescript: v${versions.typescript}`)
  .version(`cli: v${version}\ncore: v${versions.core}\ntypescript: v${versions.typescript}`)
  .name("attw")
  .description(
    `${chalk.bold.blue(
      "Are the Types Wrong?",
    )} attempts to analyze npm package contents for issues with their TypeScript types,
particularly ESM-related module resolution issues.`,
  )
  .argument(
    "[file-directory-or-package-spec]",
    "the packed .tgz, or directory containing package.json with --pack, or package spec with --from-npm",
  )
  .option("-P, --pack", "Run `npm pack` in the specified directory and delete the resulting .tgz file afterwards")
  .option("-p, --from-npm", "Read from the npm registry instead of a local file")
  .addOption(new Option("--definitely-typed [version]", "Specify the version range of @types to use").default(true))
  .option("--no-definitely-typed", "Don't include @types")
  .addOption(new Option("-f, --format <format>", "Specify the print format").choices(formats).default("auto"))
  .option("-q, --quiet", "Don't print anything to STDOUT (overrides all other options)")
  .option(
    "--entrypoints <entrypoints...>",
    "Specify an exhaustive list of entrypoints to check. " +
      'The package root is `"." Specifying this option disables automatic entrypoint discovery, ' +
      "and overrides the `--include-entrypoints` and `--exclude-entrypoints` options.",
  )
  .option(
    "--include-entrypoints <entrypoints...>",
    "Specify entrypoints to check in addition to automatically discovered ones.",
  )
  .option("--exclude-entrypoints <entrypoints...>", "Specify entrypoints to exclude from checking.")
  .addOption(
    new Option("--ignore-rules <rules...>", "Specify rules to ignore").choices(Object.values(problemFlags)).default([]),
  )
  .option("--summary, --no-summary", "Whether to print summary information about the different errors")
  .option("--emoji, --no-emoji", "Whether to use any emojis")
  .option("--color, --no-color", "Whether to use any colors (the FORCE_COLOR env variable is also available)")
  .option("--config-path <path>", "Path to config file (default: ./.attw.json)")
  .action(async (fileOrDirectory = ".") => {
    const opts = program.opts<Opts>();
    await readConfig(program, opts.configPath);
    opts.ignoreRules = opts.ignoreRules?.map(
      (value) => Object.keys(problemFlags).find((key) => problemFlags[key as core.ProblemKind] === value) as string,
    );

    if (opts.quiet) {
      console.log = () => {};
    }

    if (!opts.color) {
      process.env.FORCE_COLOR = "0";
    }

    let analysis: core.CheckResult;
    let deleteTgz;
    const dtIsPath =
      typeof opts.definitelyTyped === "string" &&
      (opts.definitelyTyped.includes("/") ||
        opts.definitelyTyped.includes("\\") ||
        opts.definitelyTyped.endsWith(".tgz") ||
        opts.definitelyTyped.endsWith(".tar.gz"));

    if (opts.fromNpm) {
      if (opts.pack) {
        program.error("--pack and --from-npm cannot be used together");
      }
      try {
        const result = parsePackageSpec(fileOrDirectory);
        if (result.status === "error") {
          program.error(result.error);
        } else {
          let pkg;
          if (dtIsPath) {
            const dtPackage = core.createPackageFromTarballData(
              new Uint8Array(await readFile(opts.definitelyTyped as string)),
            );
            const pkgVersion =
              result.data.versionKind === "none"
                ? `${major(dtPackage.packageVersion)}.${minor(dtPackage.packageVersion)}`
                : result.data.version;
            pkg = (await core.createPackageFromNpm(`${result.data.name}@${pkgVersion}`)).mergedWithTypes(dtPackage);
          } else {
            pkg = await core.createPackageFromNpm(`${result.data.name}@${result.data.version}`, {
              definitelyTyped: opts.definitelyTyped,
            });
          }
          analysis = await core.checkPackage(pkg, {
            entrypoints: opts.entrypoints,
            includeEntrypoints: opts.includeEntrypoints,
            excludeEntrypoints: opts.excludeEntrypoints,
          });
        }
      } catch (error) {
        if (error instanceof Error && "code" in error) {
          program.error(`error while fetching package:\n${error.message}`, { code: "" + error.code });
        }

        handleError(error, "checking package");
      }
    } else {
      try {
        let fileName = fileOrDirectory;
        if (
          await stat(fileOrDirectory)
            .then((stat) => !stat.isFile())
            .catch(() => false)
        ) {
          if (!(await stat(path.join(fileOrDirectory, "package.json")).catch(() => false))) {
            program.error(
              `Specified directory must contain a package.json. No package.json found in ${path.resolve(
                fileOrDirectory,
              )}.`,
            );
          }

          if (!opts.pack) {
            if (!process.stdout.isTTY) {
              program.error(
                "Specifying a directory requires the --pack option to confirm that running `npm pack` is ok.",
              );
            }
            const rl = readline.createInterface(process.stdin, process.stdout);
            const answer = await new Promise<string>((resolve) => {
              rl.question(`Run \`npm pack\`? (Pass -P/--pack to skip) (Y/n) `, resolve);
            });
            rl.close();
            if (answer.trim() && !answer.trim().toLowerCase().startsWith("y")) {
              process.exit(1);
            }
          }

          const manifest = JSON.parse(await readFile(path.join(fileOrDirectory, "package.json"), { encoding: "utf8" }));
          fileName = deleteTgz = path.join(
            fileOrDirectory,
            // https://github.com/npm/cli/blob/f875caa86900122819311dd77cde01c700fd1817/lib/utils/tar.js#L123-L125
            `${manifest.name.replace("@", "").replace("/", "-")}-${manifest.version}.tgz`,
          );
          execSync("npm pack", { cwd: fileOrDirectory, encoding: "utf8", stdio: "ignore" });
        }
        const file = await readFile(fileName);
        const data = new Uint8Array(file);
        const pkg = dtIsPath
          ? core
              .createPackageFromTarballData(data)
              .mergedWithTypes(
                core.createPackageFromTarballData(new Uint8Array(await readFile(opts.definitelyTyped as string))),
              )
          : core.createPackageFromTarballData(data);
        analysis = await core.checkPackage(pkg, {
          entrypoints: opts.entrypoints,
          includeEntrypoints: opts.includeEntrypoints,
          excludeEntrypoints: opts.excludeEntrypoints,
        });
      } catch (error) {
        handleError(error, "checking file");
      }
    }

    if (opts.format === "json") {
      const result = { analysis } as {
        analysis: core.CheckResult;
        problems?: Partial<Record<core.ProblemKind, core.Problem[]>>;
      };

      if (analysis.types) {
        result.problems = groupProblemsByKind(analysis.problems);
      }

      console.log(JSON.stringify(result));

      if (analysis.types && analysis.problems.some((problem) => !opts.ignoreRules?.includes(problem.kind)))
        process.exit(1);

      return;
    }

    console.log();
    if (analysis.types) {
      await render.typed(analysis, opts);

      if (analysis.types && analysis.problems.some((problem) => !opts.ignoreRules?.includes(problem.kind))) {
        process.exitCode = 1;
      }
    } else {
      render.untyped(analysis as core.UntypedResult);
    }

    if (deleteTgz) {
      await unlink(deleteTgz);
    }
  });

program.parse(process.argv);

function handleError(error: unknown, title: string): never {
  if (error && typeof error === "object" && "message" in error) {
    program.error(`error while ${title}:\n${error.message}`, {
      exitCode: 3,
      code: "code" in error && typeof error.code === "string" ? error.code : "UNKNOWN",
    });
  }

  program.error(`unknown error while ${title}`, { code: "UNKNOWN", exitCode: 3 });
}

process.on("unhandledRejection", (error) => {
  handleError(error, "checking package");
});
