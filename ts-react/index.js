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
        namedComponents: "function-declaration",
        // unnamedComponents: "function-expression",
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
  },
};
module.exports = config;
