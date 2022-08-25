/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended", "@vue/eslint-config-prettier", "./.eslintrc-auto-import.json"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};