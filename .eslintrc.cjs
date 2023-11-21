/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a lowercase letter (or digit or underscore), or `@` followed by a letter.
          ['^@?[a-z0-9]'],
          // Components.
          // Things that start with an uppercase.
          ['^[A-Z]'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ['^[^.]'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    semi: 'error',
    quotes: ['error', 'single'],
    'no-var': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    eqeqeq: 'error',
    curly: ['error'],
  },
};
