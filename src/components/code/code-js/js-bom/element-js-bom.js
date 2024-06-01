class JsBom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="bom"></main>
    </section>
    `;
    this.className = 'js-bom';
  }
}

customElements.define('js-bom', JsBom);
