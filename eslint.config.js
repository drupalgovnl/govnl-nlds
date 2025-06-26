import js from '@eslint/js';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  // Base config for all files
  ...storybook.configs['flat/recommended'],

  // Storybook story files need browser globals
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx)'],
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        DOMParser: 'readonly',
        HTMLElement: 'readonly',
      },
    },
  },

  // Build scripts and config files
  {
    files: [
      '**/*.config.@(js|mjs|ts)',
      '**/.*rc.@(js|mjs|ts)',
      '**/*build*.mjs',
      'scripts/**/*.mjs',
    ],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'import/no-default-export': 'off',
    },
  },

  // Storybook config files
  {
    files: ['**/storybook/**/*.@(js|mjs|ts)', '**/.storybook/**/*.@(js|mjs|ts)'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },

  // TypeScript declaration files
  {
    files: ['**/*.d.ts'],
    rules: {
      // TypeScript declaration files have different syntax rules
    },
  },

  // Prettier config (must be last)
  prettier,

  // Ignored files
  {
    ignores: [
      'dist/',
      'node_modules/',
      '*.min.js',
      'coverage/',
      '.changeset/',
      'packages/storybook/dist/',
      '**/*.d.ts',
    ],
  },
];
