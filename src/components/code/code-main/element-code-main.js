class CodeMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Code</h1>
    `;
    this.className = 'code-main';
  }
}

customElements.define('code-main', CodeMain);
