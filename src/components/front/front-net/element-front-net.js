class FrontNet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="main" id="net"></main>
      </section>
    `;
    this.className = 'front-net';
  }
}

customElements.define('front-net', FrontNet);
