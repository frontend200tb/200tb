module.exports = {
  env: {
    browser: true,      // для window, document
    node: true,         // для require, module
    es2023: true,       // современный JavaScript
    commonjs: true,     // для CommonJS синтаксиса (если используется)
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2023, // поддерживает современные фичи
    sourceType: 'module', // для import/export
  },
  rules: {
    'no-console': 0, // разрешаем console.log
    'linebreak-style': 0, // отключаем проверку переносов строк (кроссплатформенность)
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // разрешаем i++ в циклах
    'import/prefer-default-export': 0, // если у вас компоненты с одним экспортом по умолчанию не требовать export default
    'class-methods-use-this': 0, // для компонентов-классов, где не все методы используют this
    'max-len': ['warn', { code: 120 }], // строки до 120 символов (вместо 80)
  },
};
