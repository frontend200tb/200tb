import html from './elem-tools-vscode.html';

class ToolsVscode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-vscode', ToolsVscode);
