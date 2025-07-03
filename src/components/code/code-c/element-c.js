class CodeC extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="code-c" id="code-c">
      <h1>C</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="c"></div>
    </div>
    `;
    this.className = 'code-c';
  }
}

customElements.define('code-c', CodeC);
