// escape-cpp-loader.js
module.exports = function(source) {
  const escapeCode = (code) => {
    return code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  // Находим любой тег с классом language-cpp (pre, code, div и т.д.)
  // И экранируем всё его содержимое
  return source.replace(/<(pre|code|div)([^>]*class="(?:language-cpp|cpp)"[^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attributes, content) => {
    const escapedContent = escapeCode(content);
    return `<${tag}${attributes}>${escapedContent}</${tag}>`;
  });
};
