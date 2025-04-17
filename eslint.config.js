// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  // Базовые правила ESLint
  js.configs.recommended,

  // TypeScript поддержка
  ...tseslint.configs.recommended,

  // React поддержка
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      "@typescript-eslint/no-empty-interface": ["error", {
        "allowSingleExtends": true
      }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "comma-dangle": "off",

      "no-multiple-empty-lines": ["error", {
        "max": 1
      }],
      "react/destructuring-assignment": ["warn", "always", {
        "ignoreClassFields": true
      }],
      "react/jsx-max-props-per-line": ["error", {
        "maximum": 2
      }],
      "react/jsx-props-no-spreading": ["error", {
        "custom": "ignore"
      }],
      // "react/jsx-sort-props": ["error", {
      //   "ignoreCase": true
      // }],
      "react/prop-types": "off",
      // "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      // "sort-imports": ["error", {
      //   "ignoreCase": true,
      //   "ignoreDeclarationSort": true
      // }]

    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];