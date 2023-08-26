# postcss@8.4.21.tgz

```
$ attw postcss@8.4.21.tgz -f table-flipped


postcss v8.4.21

🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

🐛 Import resolved to types through a conditional package.json export, but only after failing to resolve through an earlier condition. This behavior is a TypeScript bug (https://github.com/microsoft/TypeScript/issues/50762). It may misrepresent the runtime behavior of this import and should not be relied upon. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FallbackCondition.md

❗️ The resolved types use export default where the JavaScript file appears to use module.exports =. This will cause TypeScript under the node16 module mode to think an extra .default property access is required, but that will likely fail at runtime. These types should use export = instead of export default. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseExportDefault.md

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md


┌──────────────────────────────────┬─────────────┬───────────────────┬──────────────────────────────┬────────────────────────────┐
│                                  │ node10      │ node16 (from CJS) │ node16 (from ESM)            │ bundler                    │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss"                        │ 🟢          │ 🟢 (CJS)          │ 🎭 Masquerading as CJS       │ 🐛 Used fallback condition │
│                                  │             │                   │ 🐛 Used fallback condition   │                            │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/at-rule"            │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/comment"            │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/container"          │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/css-syntax-error"   │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/declaration"        │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/fromJSON"           │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/input"              │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/lazy-result"        │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/no-work-result"     │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/list"               │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/map-generator"      │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/node"               │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/parse"              │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/parser"             │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/postcss"            │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/previous-map"       │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/processor"          │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/result"             │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/root"               │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/rule"               │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/stringifier"        │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/stringify"          │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/symbols"            │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/terminal-highlight" │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/tokenize"           │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/warn-once"          │ ❌ No types │ ❌ No types       │ ❌ No types                  │ ❌ No types                │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/lib/warning"            │ 🟢          │ 🟢 (CJS)          │ ❗️ Incorrect default export │ 🟢                         │
├──────────────────────────────────┼─────────────┼───────────────────┼──────────────────────────────┼────────────────────────────┤
│ "postcss/package.json"           │ 🟢 (JSON)   │ 🟢 (JSON)         │ 🟢 (JSON)                    │ 🟢 (JSON)                  │
└──────────────────────────────────┴─────────────┴───────────────────┴──────────────────────────────┴────────────────────────────┘


```

Exit code: 1