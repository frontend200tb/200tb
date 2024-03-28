class CodeJs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="code-js" id="code-js">
      <h1>Справочник по JS</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="js"></div>
    </div>
    `;
    this.className = 'code-js';
  }
}

customElements.define('code-js', CodeJs);
