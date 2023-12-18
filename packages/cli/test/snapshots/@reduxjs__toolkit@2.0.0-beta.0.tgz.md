# @reduxjs__toolkit@2.0.0-beta.0.tgz

```
$ attw @reduxjs__toolkit@2.0.0-beta.0.tgz -f table-flipped


@reduxjs/toolkit v2.0.0-beta.0

Build tools:
- typescript@~4.9
- @microsoft/api-extractor@^7.13.2
- tsup@^6.7.0

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md


┌─────────────────────────────────┬───────────┬──────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│                                 │ node10    │ node16 (from CJS)            │ node16 (from ESM)            │ bundler                      │
├─────────────────────────────────┼───────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ "@reduxjs/toolkit/package.json" │ 🟢 (JSON) │ 🟢 (JSON)                    │ 🟢 (JSON)                    │ 🟢 (JSON)                    │
├─────────────────────────────────┼───────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ "@reduxjs/toolkit"              │ 🟢        │ 🟢 (CJS)                     │ 🎭 Masquerading as CJS       │ 🟢                           │
├─────────────────────────────────┼───────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ "@reduxjs/toolkit/react"        │ 🟢        │ 🥴 Internal resolution error │ 🥴 Internal resolution error │ 🥴 Internal resolution error │
│                                 │           │                              │ 🎭 Masquerading as CJS       │                              │
├─────────────────────────────────┼───────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ "@reduxjs/toolkit/query"        │ 🟢        │ 🟢 (CJS)                     │ 🎭 Masquerading as CJS       │ 🟢                           │
├─────────────────────────────────┼───────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ "@reduxjs/toolkit/query/react"  │ 🟢        │ 🥴 Internal resolution error │ 🥴 Internal resolution error │ 🥴 Internal resolution error │
│                                 │           │                              │ 🎭 Masquerading as CJS       │                              │
└─────────────────────────────────┴───────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘


```

Exit code: 1