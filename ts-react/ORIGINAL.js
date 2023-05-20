const path = require("path");

const booleanPrefixes = ["is", "should", "has", "can", "did", "will"];

/** @type {import("eslint").Linter.Config} */
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
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // Typescript rules
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],
    // TODO "@typescript-eslint/explicit-function-return-type"
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    // TODO "@typescript-eslint/no-type-alias"
    "@typescript-eslint/no-unnecessary-qualifier": "error", // for `namespace` since enums are forbidden
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    // TODO "@typescript-eslint/prefer-reduce-type-parameter"
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // Extension rules
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    // TODO need deeper config
    // "no-magic-numbers": "off",
    // "@typescript-eslint/no-magic-numbers": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": "error",
    // TODO "@typescript-eslint/no-shadow"
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    // Off: Using a function in another function may happen: to keep a better structure, i turned it off.
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    // TODO Not 100% about this one, needs deeper params config
    // TODO disabled temporarily.
    // "@typescript-eslint/prefer-readonly-parameter-types": [
    //   "error",
    //   {
    //     // Better, but not perfect yet i guess
    //     ignoreInferredTypes: true,
    //   },
    // ],

    // import / export
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-require-imports": "error",

    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: true,
      },
    ],

    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",

    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",

    // Dangerous if default type is changed so i turned it off
    "@typescript-eslint/no-unnecessary-type-arguments": "off",

    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // TODO Getting deep into naming convention to be more strict on every type
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: booleanPrefixes,
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeProperty",
        types: ["boolean"],
        prefix: booleanPrefixes,
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
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
    "react/button-has-type": [
      "error",
      {
        reset: false,
        submit: false,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],

    // Annoyinh when working with Vite
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/hook-use-state": [
      "error",
      {
        allowDestructuredState: true,
      },
    ],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-fragments": ["error", "syntax"],
    // they were using classes, should only work with that. basically useless
    // "react/jsx-handler-names": "error",
    // does not understand booleans apparently
    // TODO check if this works with some boolean cases, seems to work but needs more tries. conflict with ts/no-unnecessary-condition
    "react/jsx-no-leaked-render": [
      "error",
      {
        validStrategies: ["coerce"],
      },
    ],
    "react/jsx-no-script-url": [
      "error",
      [{ name: "Link", props: ["to", "href"] }],
    ],
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        // For some acronyms or something
        allowAllCaps: true,
        // Scoped component for composition
        allowNamespace: true,
      },
    ],
    // Hard take, but yeah
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    // TODO "react/no-multi-comp" -> good practice: i need to organize my files better to activate this rule though
    "react/no-namespace": "error",
    // TODO "react/no-object-type-as-default-prop" not 100% sure
    "react/no-this-in-sfc": "error",
    "react/no-unstable-nested-components": "error",
    "react/self-closing-comp": "error",
    "react/void-dom-elements-no-children": "error",

    // ESLint rules
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-await-in-loop": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "require-atomic-updates": "error",
    "block-scoped-var": "error",
    // TODO "consistent-return"
    "default-case": "error",
    "default-case-last": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    // TODO "id-denylist" interesting rule although i'm used to breaking it. May force me to write good variables naming to improve readability
    // TODO "id-length" same thing as ^
    "init-declarations": ["error", "always"],
    "logical-assignment-operators": "error",
    "max-params": ["error", 3],
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    // not 100% sure but lets try it
    "no-confusing-arrow": "error",
    "no-div-regex": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-floating-decimal": "error",
    "no-iterator": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    // TODO "no-sequences"
    "no-unneeded-ternary": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    // TODO "object-shorthand"
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed"],
    radix: ["error", "as-needed"],
    // Markers needed for ts <reference>
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "symbol-description": "error",
    yoda: ["error", "never", { exceptRange: true }],

    quotes: ["error", "double"],
    semi: ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "error",
  },
};
module.exports = config;
