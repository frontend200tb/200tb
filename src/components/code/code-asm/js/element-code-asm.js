class CodeAsm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-asm';
  }
}

customElements.define('code-asm', CodeAsm);
