# node-html-parser@6.1.5.tgz

```
$ attw node-html-parser@6.1.5.tgz -f table-flipped


node-html-parser v6.1.5

🤨 CommonJS module simulates a default export with exports.default and exports.__esModule, but does not also set module.exports for compatibility with Node. Node, and some bundlers under certain conditions (https://andrewbranch.github.io/interop-test/#synthesizing-default-exports-for-cjs-modules), do not respect the __esModule marker, so accessing the intended default export will require a .default property access on the default import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSOnlyExportsDefault.md


┌────────────────────┬───────────────────────┬───────────────────────┬───────────────────────┬───────────────────────┐
│                    │ node10                │ node16 (from CJS)     │ node16 (from ESM)     │ bundler               │
├────────────────────┼───────────────────────┼───────────────────────┼───────────────────────┼───────────────────────┤
│ "node-html-parser" │ 🤨 CJS default export │ 🤨 CJS default export │ 🤨 CJS default export │ 🤨 CJS default export │
└────────────────────┴───────────────────────┴───────────────────────┴───────────────────────┴───────────────────────┘


```

Exit code: 1