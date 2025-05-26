class CodeAsm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="code-asm" id="code-asm">
      <h1>Ассемблер</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="asm"></div>
    </div>
    `;
    this.className = 'code-asm';
  }
}

customElements.define('code-asm', CodeAsm);
