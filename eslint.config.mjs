import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig({
  ignores: ["dist/**", "node_modules/**"],

  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: {
        globals: { ...globals.browser, ...globals.node },
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          ecmaFeatures: {
            jsx: true
          }
        }
      }
    },
    {
      files: ["**/*.{js,jsx}"],
      plugins: { react: pluginReact },
      rules: {
        ...pluginReact.configs.recommended.rules
      },
      settings: {
        react: {
          version: "detect"
        }
      }
    },
    {
      files: ["**/*.json"],
      plugins: { json },
      language: "json/json",
      extends: ["json/recommended"]
    },
    {
      files: ["**/*.jsonc"],
      plugins: { json },
      language: "json/jsonc",
      extends: ["json/recommended"]
    },
    {
      files: ["**/*.json5"],
      plugins: { json },
      language: "json/json5",
      extends: ["json/recommended"]
    },
    {
      files: ["**/*.md"],
      plugins: { markdown },
      language: "markdown/gfm",
      extends: ["markdown/recommended"]
    },
    {
      files: ["**/*.css"],
      plugins: { css },
      language: "css/css",
      extends: ["css/recommended"]
    }
  ]
});
