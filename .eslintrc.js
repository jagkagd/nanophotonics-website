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
    parser: 'babel-eslint'
  },

  rules: {
    'indent': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'quotes': 'off',
    'object-curly-spacing': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'quote-props': 'off',
    'semi': 'off',
    'space-before-blocks': 'off',
    'comma-dangle': 'off',
    'dot-notation': 'off',
    'prefer-const': 'off',
    'no-trailing-spaces': 'off',
    'no-unreachable': 'off',
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
