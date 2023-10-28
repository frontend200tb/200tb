module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    // browser: true, нужен чтобы eslint понимал объекты браузера
    // иначе ругается на window, document
    browser: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    // sourceType: module,
  },
  rules: {
    'no-console': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
