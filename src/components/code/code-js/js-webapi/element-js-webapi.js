class JsWebapi extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="webapi"></main>
    </section>
    `;
    this.className = 'js-webapi';
  }
}

customElements.define('js-webapi', JsWebapi);
