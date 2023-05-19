# sq's ESLint config

No warn are used. All rules are set with `error` parameter. For now, only `eskiu/ts-react` is available

## eskiu/ts-react

`eskiu/ts-react` extends `eslint:recommended`, `plugin:@typescript-eslint/recommended` and in overrides: `plugin:@typescript-eslint/recommended-requiring-type-checking`

### Enums are forbidden

Enums are bad. Don't use them. Thankfully, if your coworker wants to use it, they'll see a wonderful error.

### List of rules

```js
 // Typescript rules
"@typescript-eslint/array-type": "error",
"@typescript-eslint/no-unused-vars": "error",
"@typescript-eslint/consistent-type-definitions": "error",
"@typescript-eslint/consistent-type-imports": "error",
"@typescript-eslint/consistent-type-exports": "error",
"@typescript-eslint/no-confusing-non-null-assertion": "error",
"@typescript-eslint/no-explicit-any": "error",
"@typescript-eslint/no-dynamic-delete": "error",
"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
"@typescript-eslint/no-require-imports": "error",
"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
"@typescript-eslint/no-unnecessary-condition": "error",
"@typescript-eslint/require-array-sort-compare": "error",
"@typescript-eslint/require-await": "error",
"@typescript-eslint/prefer-ts-expect-error": "error",
"@typescript-eslint/naming-convention": [
    "error",
    {
    selector: "variable",
    types: ["boolean"],
    format: ["PascalCase"],
    prefix: ["is", "should", "has", "can", "did", "will"],
    },
    {
    selector: "typeParameter",
    format: ["PascalCase"],
    prefix: ["T"],
    },
    {
    selector: "interface",
    format: ["PascalCase"],
    custom: {
        regex: "^I[A-Z]",
        match: false,
    },
    },
    {
    selector: "typeLike",
    format: ["PascalCase"],
    },
],
"no-restricted-syntax": [
    "error",
    {
    selector: "TSEnumDeclaration",
    message:
        "Enums are not allowed. Consider using an object or a map instead.",
    },
],

// React rules
"react/react-in-jsx-scope": "off",
"react/prop-types": "off",
"react/destructuring-assignment": ["error", "always"],
"react/hook-use-state": "error",
"react/function-component-definition": [
    "error",
    {
    namedComponents: "arrow-function",
    },
],
"react/jsx-boolean-value": ["error", "never"],
"react/jsx-child-element-spacing": "error",
"react/jsx-fragments": ["error", "syntax"],
"react/jsx-no-script-url": "error",
"react/jsx-no-target-blank": "error",
"react/jsx-pascal-case": "error",
"react/no-array-index-key": "error",
"react/no-danger": "error",

// ESLint rules
eqeqeq: "error",
quotes: ["error", "double"],
semi: ["error", "always"],
"no-delete-var": "error",

// v used in @typescript-eslint instead
"require-await": "off",

"arrow-parens": ["error", "as-needed"],
"arrow-body-style": ["error", "as-needed"],
camelcase: "error",
"dot-notation": "error",
```

### Installation

To install the config, run:

#### npm

```bash
npm i eslint-config-eskiu -D
```

#### yarn

```bash
yarn add eslint-config-eskiu -D
```

#### pnpm

```bash
pnpm add eslint-config-eskiu -D
```

### In your .eslintrc.cjs:

List of configs:
`eskiu/ts-react`

Make sure to have a `tsconfig.json`

```js
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ["eskiu/{CONFIG_NAME}"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    // your plugins
  ],
  rules: {
    // your rules
  },
};
```

## Note

I'm only getting started with ESLint, there are probably rules i havent set yet but it'll be updated whenever i need. I'll take time to update that readme as well with more readable list of rules.

## TODO

- [] https://www.npmjs.com/package/eslint-plugin-mui-path-imports
- [] https://github.com/jsx-eslint/eslint-plugin-react
