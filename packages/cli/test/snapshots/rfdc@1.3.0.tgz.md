# rfdc@1.3.0.tgz

```
$ attw rfdc@1.3.0.tgz -f table-flipped


rfdc v1.3.0

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md


┌────────────────┬─────────────┬───────────────────┬───────────────────┬─────────────┐
│                │ node10      │ node16 (from CJS) │ node16 (from ESM) │ bundler     │
├────────────────┼─────────────┼───────────────────┼───────────────────┼─────────────┤
│ "rfdc"         │ 🟢          │ 🟢 (CJS)          │ 🟢 (CJS)          │ 🟢          │
├────────────────┼─────────────┼───────────────────┼───────────────────┼─────────────┤
│ "rfdc/default" │ ❌ No types │ ❌ No types       │ ❌ No types       │ ❌ No types │
└────────────────┴─────────────┴───────────────────┴───────────────────┴─────────────┘


```

Exit code: 1