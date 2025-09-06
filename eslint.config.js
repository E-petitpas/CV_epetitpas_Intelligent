// eslint.config.js (flat config ESLint v9)
import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  // 🔕 ignores (évite l’erreur sur prettier.config.cjs & co)
  { ignores: [
    "node_modules",
    "dist",
    "build",
    "coverage",
    "prettier.config.cjs",
    "eslint.config.*",
    "*.config.*",
    "vite.config*.ts",
    "src/supabase/functions/**"
  ]},

  // Recos de base
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { react: reactPlugin, "react-hooks": reactHooks },
    rules: {
      // équivalents des presets react / react-hooks
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ajustements utiles pour TS + React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",               // tu es en TS
      "react/no-unescaped-entities": "off",    // évite les 50+ erreurs d’apostrophes
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      }],
    },
    settings: { react: { version: "detect" } },
  },

  // Toujours en dernier avec Prettier
  eslintConfigPrettier,
]
