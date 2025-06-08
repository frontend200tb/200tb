class Yargu1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-yargu1';
  }
}

customElements.define('alg-yargu1', Yargu1);
