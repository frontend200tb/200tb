class FrontBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="list" id="base"></main>
    </section>
    `;
    this.className = 'front-base';
  }
}

customElements.define('front-base', FrontBase);
