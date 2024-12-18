class FrontNets extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="main" id="nets"></main>
      </section>
    `;
    this.className = 'front-nets';
  }
}

customElements.define('front-nets', FrontNets);
