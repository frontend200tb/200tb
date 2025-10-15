class Ta4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ta4';
  }
}

customElements.define('alg-ta4', Ta4);
