class Ta5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ta5';
  }
}

customElements.define('alg-ta5', Ta5);
