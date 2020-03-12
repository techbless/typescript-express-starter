module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'max-len': ['error', {"codes": 140}],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'consistent-return': 0,
    'import/first': 0
  },
};
