// eslint.config.js
import angular from 'angular-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // TypeScript-файлы
  {
    files: ['**/*.ts'],
    extends: [angular.configs.tsRecommended],
    languageOptions: {
      parserOptions: { project: ['./tsconfig.json'], sourceType: 'module' },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },

  // Angular-шаблоны (HTML)
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended],
    rules: {},
  },

  // Последним — Prettier, чтобы отключить конфликтующие стиль-правила
  prettier,
];
