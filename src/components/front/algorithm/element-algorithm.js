class BaseAlgorithm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="algorithm"></main>
    </section>
    `;
    this.className = 'base-algorithm';
  }
}

customElements.define('base-algorithm', BaseAlgorithm);
