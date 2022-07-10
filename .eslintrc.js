module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  // parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    // '@typescript-eslint/rule-name': 'error',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['Header', 'Footer', 'Sidebar'],
    //   },
    // ],
  },
}
