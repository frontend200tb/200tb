class CfAll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-all';
  }
}

customElements.define('alg-all', CfAll);
