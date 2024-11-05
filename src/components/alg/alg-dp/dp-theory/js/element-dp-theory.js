class DpTheory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'dp-theory';
  }
}

customElements.define('dp-theory', DpTheory);
