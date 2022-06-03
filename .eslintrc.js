const RULES = {
  OFF: 'off',
  ON: 'on',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'always',
    //     asyncArrow: 'always'
    //   }
    // ]
  }
}
