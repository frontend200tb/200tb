class CodePascal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="code-pascal" id="code-pascal">
      <h1>Pascal</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="pascal"></div>
    </div>
    `;
    this.className = 'code-pascal';
  }
}

customElements.define('code-pascal', CodePascal);
