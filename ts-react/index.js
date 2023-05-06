const path = require("path");

const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsConfigRootDir: __dirname,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Typescript rules
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    // "@typescript-eslint/no-confusing-void-expression": "error",
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

    // does not understand booleans apparently
    // "react/jsx-no-leaked-render": "error",

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
    // v used in eslint-ts instead
    "require-await": "off",
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "error",
    "dot-notation": "error",
  },
};
module.exports = config;
