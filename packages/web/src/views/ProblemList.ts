import { marked } from "marked";
import type { CheckResult, ProblemKind } from "@arethetypeswrong/core";
import { problemKindInfo } from "@arethetypeswrong/core/problems";
import { groupProblemsByKind } from "@arethetypeswrong/core/utils";

export function ProblemList(props: { analysis?: CheckResult }) {
  if (!props.analysis) {
    return {
      innerHTML: "",
    };
  }

  if (!props.analysis.types) {
    return {
      innerHTML: "This package does not contain types.",
    };
  }

  if (!props.analysis.problems.length) {
    return {
      innerHTML: "No problems found 🌟",
    };
  }

  const problems = groupProblemsByKind(props.analysis.problems);
  return {
    innerHTML: `<dl>
      ${Object.entries(problems)
        .map(([kind]) => {
          return `
          <dt>${problemKindInfo[kind as ProblemKind].emoji}</dt>
          <dd>${marked.parse(problemKindInfo[kind as ProblemKind].description)}</dd>
        `;
        })
        .join("")}
    </dl>`,
  };
}
