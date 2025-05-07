import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Globally ignore dist and node_modules
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // JS and JSX files with JS plugin
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

  // React specific rules for JS and JSX files
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

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },

  // JSONC files
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"]
  },

  // JSON5 files
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"]
  },

  // Markdown files
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"]
  },

  // CSS files
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  }
]);
