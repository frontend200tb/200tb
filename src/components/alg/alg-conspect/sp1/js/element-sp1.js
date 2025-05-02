class Sp1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-sp1';
  }
}

customElements.define('alg-sp1', Sp1);
