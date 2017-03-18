// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': [0, 4],
        'quotes': [1, 'single'],
        'keyword-spacing': 0,
        'key-spacing': 0,
        'space-before-blocks': 0,
        'space-before-function-paren': 0,
        'prefer-const': 1,
        'no-const-assign': 1,
        'no-var': 1,
        'no-new-object': 1,
        'object-shorthand': 1,
        'no-array-constructor': 1,
        'array-callback-return': 1,
        'prefer-arrow-callback': 1,
        'arrow-spacing': 1,
        'dot-notation': 1,
        "array-callback-return": 0
    }
}
