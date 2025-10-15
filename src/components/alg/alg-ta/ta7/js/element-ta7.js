class Ta7 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ta7';
  }
}

customElements.define('alg-ta7', Ta7);
