class Mirea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-mirea';
  }
}

customElements.define('alg-mirea', Mirea);
