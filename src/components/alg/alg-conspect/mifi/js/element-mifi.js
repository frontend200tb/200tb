class Mifi extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-mifi';
  }
}

customElements.define('alg-mifi', Mifi);
