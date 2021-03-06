module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-extra-semi": "error",
    "semi": [2, "always"],
    "printWidth": 80,
    "tabWidth": 4,
    "singleQuote": true,
    "arrowParens": "always"
  }
}
