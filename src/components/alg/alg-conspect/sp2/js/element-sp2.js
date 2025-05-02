class Sp2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-sp2';
  }
}

customElements.define('alg-sp2', Sp2);
