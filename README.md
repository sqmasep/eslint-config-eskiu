# sq's ESLint config

No warn are used. All rules are set with `error` parameter. For now, only `eskiu/ts-react` is available

## Installation

To install the config, run:

### npm

```bash
npm i eslint-config-eskiu -D
```

### yarn

```bash
yarn add eslint-config-eskiu -D
```

### pnpm

```bash
pnpm add eslint-config-eskiu -D
```

## In your .eslintrc.cjs:

List of configs:

- `eskiu/ts`
- `eskiu/ts-react`

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
- [] installing `eslint-config-eskiu` installs every peerDeps although you might not want to use react
