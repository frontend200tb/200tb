class Spbgu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-spbgu';
  }
}

customElements.define('alg-spbgu', Spbgu);
