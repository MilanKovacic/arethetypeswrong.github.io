# @ice__app@3.2.6.tgz

```
$ attw @ice__app@3.2.6.tgz -f table-flipped


@ice/app v3.2.6

Build tools:
- webpack@^5.86.0
- esbuild@^0.17.16

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. Use --json to see the imports that failed to resolve. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md

💀 Import failed to resolve to type declarations or JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/NoResolution.md


┌────────────────────┬──────────────────────┬──────────────────────────────┬──────────────────────────────┬─────────┐
│                    │ node10               │ node16 (from CJS)            │ node16 (from ESM)            │ bundler │
├────────────────────┼──────────────────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@ice/app"         │ 🟢                   │ ⚠️ ESM (dynamic import only) │ 🥴 Internal resolution error │ 🟢      │
│                    │                      │ 🥴 Internal resolution error │                              │         │
├────────────────────┼──────────────────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@ice/app/types"   │ 🟢                   │ 🥴 Internal resolution error │ 🥴 Internal resolution error │ 🟢      │
│                    │                      │ ⚠️ ESM (dynamic import only) │                              │         │
├────────────────────┼──────────────────────┼──────────────────────────────┼──────────────────────────────┼─────────┤
│ "@ice/app/analyze" │ 💀 Resolution failed │ ⚠️ ESM (dynamic import only) │ 🟢 (ESM)                     │ 🟢      │
└────────────────────┴──────────────────────┴──────────────────────────────┴──────────────────────────────┴─────────┘


```

Exit code: 1