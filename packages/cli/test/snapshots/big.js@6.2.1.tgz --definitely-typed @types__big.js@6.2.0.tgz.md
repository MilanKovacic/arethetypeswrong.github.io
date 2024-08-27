# big.js@6.2.1.tgz --definitely-typed @types__big.js@6.2.0.tgz

```
$ attw big.js@6.2.1.tgz --definitely-typed @types__big.js@6.2.0.tgz


big.js v6.2.1
@types/big.js v6.2.0

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md


┌───────────────────┬────────────────────────┬──────────────────────────────┬─────────────────┬───────────────────────┐
│                   │ "big.js"               │ "big.js/big.mjs"             │ "big.js/big.js" │ "big.js/package.json" │
├───────────────────┼────────────────────────┼──────────────────────────────┼─────────────────┼───────────────────────┤
│ node10            │ 🟢                     │ ❌ No types                  │ ❌ No types     │ 🟢 (JSON)             │
├───────────────────┼────────────────────────┼──────────────────────────────┼─────────────────┼───────────────────────┤
│ node16 (from CJS) │ 🟢 (CJS)               │ ❌ No types                  │ ❌ No types     │ 🟢 (JSON)             │
│                   │                        │ ⚠️ ESM (dynamic import only) │                 │                       │
├───────────────────┼────────────────────────┼──────────────────────────────┼─────────────────┼───────────────────────┤
│ node16 (from ESM) │ 🎭 Masquerading as CJS │ ❌ No types                  │ ❌ No types     │ 🟢 (JSON)             │
├───────────────────┼────────────────────────┼──────────────────────────────┼─────────────────┼───────────────────────┤
│ bundler           │ 🟢                     │ ❌ No types                  │ ❌ No types     │ 🟢 (JSON)             │
└───────────────────┴────────────────────────┴──────────────────────────────┴─────────────────┴───────────────────────┘


```

Exit code: 1