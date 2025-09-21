class Yargu3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-yargu3';
  }
}

customElements.define('alg-yargu3', Yargu3);
