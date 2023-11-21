/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['error'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
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