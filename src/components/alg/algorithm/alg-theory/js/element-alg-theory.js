class AlgTheory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-theory';
  }
}

customElements.define('alg-theory', AlgTheory);
