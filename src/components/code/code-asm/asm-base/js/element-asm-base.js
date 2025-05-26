class AsmBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'asm-base';
  }
}

customElements.define('asm-base', AsmBase);
