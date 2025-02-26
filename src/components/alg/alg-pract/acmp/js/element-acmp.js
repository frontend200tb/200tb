class Acmp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-acmp';
  }
}

customElements.define('alg-acmp', Acmp);
