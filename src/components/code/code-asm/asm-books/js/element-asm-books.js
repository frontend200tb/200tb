class AsmBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'asm-books';
  }
}

customElements.define('asm-books', AsmBooks);
