# vue@3.3.4.tgz --entrypoints vue

```
$ attw vue@3.3.4.tgz --entrypoints vue


vue v3.3.4

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. Use --json to see the imports that failed to resolve. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md


┌───────────────────┬──────────────────────────────┐
│                   │ "vue"                        │
├───────────────────┼──────────────────────────────┤
│ node10            │ 🟢                           │
├───────────────────┼──────────────────────────────┤
│ node16 (from CJS) │ 🟢 (CJS)                     │
├───────────────────┼──────────────────────────────┤
│ node16 (from ESM) │ 🥴 Internal resolution error │
├───────────────────┼──────────────────────────────┤
│ bundler           │ 🟢                           │
└───────────────────┴──────────────────────────────┘


```

Exit code: 1