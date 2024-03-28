class JsTheory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="theory"></main>
    </section>
    `;
    this.className = 'js-theory';
  }
}

customElements.define('js-theory', JsTheory);
