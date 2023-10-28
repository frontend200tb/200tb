import html from './elem-tools-vim.html';

class ToolsVim extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-vim', ToolsVim);
