class Ta1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ta1';
  }
}

customElements.define('alg-ta1', Ta1);
