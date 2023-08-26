# vue@3.3.4.tgz

```
$ attw vue@3.3.4.tgz -f table-flipped


vue v3.3.4

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

💀 Import failed to resolve to type declarations or JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/NoResolution.md

❓ Wildcard subpaths cannot yet be analyzed by this tool. https://github.com/arethetypeswrong/arethetypeswrong.github.io/issues/40

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md


┌───────────────────────┬──────────────────────┬────────────────────┬──────────────────────────────┬────────────────────┐
│                       │ node10               │ node16 (from CJS)  │ node16 (from ESM)            │ bundler            │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue"                 │ 🟢                   │ 🟢 (CJS)           │ 🥴 Internal resolution error │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/server-renderer" │ 🟢                   │ 🟢 (CJS)           │ 🟢 (ESM)                     │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/compiler-sfc"    │ 🟢                   │ 🟢 (CJS)           │ 🟢 (ESM)                     │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/jsx-runtime"     │ 🟢                   │ 🟢 (CJS)           │ 🎭 Masquerading as CJS       │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/jsx-dev-runtime" │ 💀 Resolution failed │ 🟢 (CJS)           │ 🎭 Masquerading as CJS       │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/jsx"             │ 🟢                   │ 🟢 (CJS)           │ 🟢 (CJS)                     │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/dist/*"          │ ❓ Unable to check   │ ❓ Unable to check │ ❓ Unable to check           │ ❓ Unable to check │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/package.json"    │ 🟢 (JSON)            │ 🟢 (JSON)          │ 🟢 (JSON)                    │ 🟢 (JSON)          │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/macros"          │ 🟢                   │ 🟢 (CJS)           │ 🟢 (CJS)                     │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/macros-global"   │ 🟢                   │ 🟢 (CJS)           │ 🟢 (CJS)                     │ 🟢                 │
├───────────────────────┼──────────────────────┼────────────────────┼──────────────────────────────┼────────────────────┤
│ "vue/ref-macros"      │ 🟢                   │ 🟢 (CJS)           │ 🟢 (CJS)                     │ 🟢                 │
└───────────────────────┴──────────────────────┴────────────────────┴──────────────────────────────┴────────────────────┘


```

Exit code: 1