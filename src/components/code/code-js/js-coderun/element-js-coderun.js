class JsCoderun extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="coderun"></main>
    </section>
    `;
    this.className = 'js-coderun';
  }
}

customElements.define('js-coderun', JsCoderun);
