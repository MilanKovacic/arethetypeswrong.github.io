# astring@1.8.6.tgz

```
$ attw astring@1.8.6.tgz -f table-flipped


astring v1.8.6

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md


┌───────────┬────────┬───────────────────┬────────────────────────┬─────────┐
│           │ node10 │ node16 (from CJS) │ node16 (from ESM)      │ bundler │
├───────────┼────────┼───────────────────┼────────────────────────┼─────────┤
│ "astring" │ 🟢     │ 🟢 (CJS)          │ 🎭 Masquerading as CJS │ 🟢      │
└───────────┴────────┴───────────────────┴────────────────────────┴─────────┘


```

Exit code: 1