class FrontFramework extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="list" id="framework"></main>
    </section>
    `;
    this.className = 'front-framework';
  }
}

customElements.define('front-framework', FrontFramework);
