class FrontCode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="list" id="code"></main>
    </section>
    `;
    this.className = 'front-code';
  }
}

customElements.define('front-code', FrontCode);
