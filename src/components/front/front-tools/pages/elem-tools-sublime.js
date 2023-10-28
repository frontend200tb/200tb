import html from './elem-tools-sublime.html';

class ToolsSublime extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-sublime', ToolsSublime);
