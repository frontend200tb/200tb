class JsInterview extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="interview"></main>
    </section>
    `;
    this.className = 'js-interview';
  }
}

customElements.define('js-interview', JsInterview);
