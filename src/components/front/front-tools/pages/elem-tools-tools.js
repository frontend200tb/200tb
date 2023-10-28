import html from './elem-tools-tools.html';

class ToolsTools extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-tools', ToolsTools);
