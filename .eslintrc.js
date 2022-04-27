module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'semi': 0,
    'prefer-const': 'off',
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-irregular-whitespace': 'off'
  }
}
