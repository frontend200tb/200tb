class Acmp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside acmp">
      <aside class="aside"></aside>
      <main class="main" id="acmp"></main>
    </section>
    `;
    this.className = 'alg-acmp';
  }
}

customElements.define('alg-acmp', Acmp);
