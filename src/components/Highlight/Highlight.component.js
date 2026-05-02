// 1. Импортируем ядро библиотеки
import hljs from 'highlight.js/lib/core';

// 2. Импортируем только те языки, которые вам нужны
//    Это ключевой момент: мы загружаем только C++ и JavaScript,
//    что значительно уменьшает размер итогового бандла.
import cpp from 'highlight.js/lib/languages/cpp';
import javascript from 'highlight.js/lib/languages/javascript';

// 3. Импортируем CSS-тему. Она будет обработана Webpack'ом.
import 'highlight.js/styles/github-dark.css';

class HighlightComponent extends HTMLElement {
  constructor() {
    super();
    this.observer = null;
  }

  connectedCallback() {
    // 4. Регистрируем языки, которые мы импортировали
    hljs.registerLanguage('cpp', cpp);
    hljs.registerLanguage('javascript', javascript);

    // 5. Запускаем подсветку
    this.initHighlighting();
    this.setupMutationObserver();
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  initHighlighting() {
    this.highlightAllCode();
  }

  highlightAllCode() {
    // Находим все блоки с кодом, как и раньше
    const codeBlocks = document.querySelectorAll(
      'pre[class*="language-"], code[class*="language-"]'
    );

    codeBlocks.forEach((block) => {
      if (!block.classList.contains('hljs')) {
        // Используем метод из установленной библиотеки
        hljs.highlightElement(block);
      }
    });
  }

  setupMutationObserver() {
    // ... (код MutationObserver остается без изменений)
    this.observer = new MutationObserver((mutations) => {
      let needsHighlight = false;
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
              if (node.matches && (
                node.matches('pre code, pre[class*="language-"], code[class*="language-"]')
              )) {
                needsHighlight = true;
                break;
              }
              if (node.querySelectorAll && node.querySelectorAll('pre code, pre[class*="language-"], code[class*="language-"]').length > 0) {
                needsHighlight = true;
                break;
              }
            }
          }
        }
      }
      if (needsHighlight) {
        setTimeout(() => this.highlightAllCode(), 50);
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

customElements.define('highlight-component', HighlightComponent);
