module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },

  rules: {
    "vue/multi-word-component-names": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        map: [["@", "./src"]],
      },
    },
  },
};
