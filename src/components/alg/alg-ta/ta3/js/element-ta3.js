class Ta3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ta3';
  }
}

customElements.define('alg-ta3', Ta3);
