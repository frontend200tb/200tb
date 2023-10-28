import html from './elem-tools-git.html';

class ToolsGit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-git', ToolsGit);
