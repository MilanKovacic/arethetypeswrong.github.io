# vue@3.3.4.tgz --entrypoints . jsx-runtime

```
$ attw vue@3.3.4.tgz --entrypoints . jsx-runtime


vue v3.3.4

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. Use --json to see the imports that failed to resolve. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md


┌───────────────────┬──────────────────────────────┬────────────────────────┐
│                   │ "vue"                        │ "vue/jsx-runtime"      │
├───────────────────┼──────────────────────────────┼────────────────────────┤
│ node10            │ 🟢                           │ 🟢                     │
├───────────────────┼──────────────────────────────┼────────────────────────┤
│ node16 (from CJS) │ 🟢 (CJS)                     │ 🟢 (CJS)               │
├───────────────────┼──────────────────────────────┼────────────────────────┤
│ node16 (from ESM) │ 🥴 Internal resolution error │ 🎭 Masquerading as CJS │
├───────────────────┼──────────────────────────────┼────────────────────────┤
│ bundler           │ 🟢                           │ 🟢                     │
└───────────────────┴──────────────────────────────┴────────────────────────┘


```

Exit code: 1