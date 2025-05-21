import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      quotes: ["warn", "double"],
      semi: ["warn", "always"],
      indent: ["warn", 2],
      "comma-dangle": ["warn", "always-multiline"],
      "space-before-function-paren": ["warn", "never"],
      "no-console": "off",
      "class-methods-use-this": "off",
    },
  },
]);



2/2;

