import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";

/**
 * Configuração ESLint completa para Next.js 15+ (Flat Config)
 * Inclui: Next.js, TypeScript, Tailwind, Prettier, Import Sorting, etc.
 */
export default defineConfig([
  js.configs.recommended,

  // Configurações oficiais do Next.js
  ...nextVitals,
  ...nextTs,

  // Ignora pastas padrão do Next.js
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "public/**",
    "*.config.js",
    "*.config.mjs",
    "next-env.d.ts",
    ".env*",
  ]),

  // Configurações globais
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      next: {
        rootDir: ".",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },

  // Plugins adicionais
  {
    plugins: {
      import: importPlugin,
      tailwindcss: tailwind,
      unicorn: unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      // ====================== Regras Importantes ======================
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [{ pattern: "@/**", group: "internal", position: "after" }],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["warn", { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-custom-classname": "off", // ajuste conforme necessário

      // Unicorn (melhores práticas)
      "unicorn/prefer-top-level-await": "error",
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": "off",

      // React / Next.js
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",

      // Qualidade de código
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // controlado pelo unused-imports
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  // Regras específicas para arquivos TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // já controlado pelo unused-imports
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
]);