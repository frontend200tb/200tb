class Ftl extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-ftl';
  }
}

customElements.define('alg-ftl', Ftl);
