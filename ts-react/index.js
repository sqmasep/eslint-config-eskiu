const path = require("path");

const booleanPrefixes = ["is", "should", "has", "can", "did", "will"];

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["react"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // eslint-ts custom config
    "../ts",
  ],
  rules: {
    // React rules
    // FIXME: why did i set this rule
    "react/button-has-type": [
      "error",
      {
        reset: false,
        // submit: false,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],

    // annoying when working with Vite
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
