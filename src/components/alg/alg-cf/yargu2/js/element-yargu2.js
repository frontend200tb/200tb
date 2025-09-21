class Yargu2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-yargu2';
  }
}

customElements.define('alg-yargu2', Yargu2);
