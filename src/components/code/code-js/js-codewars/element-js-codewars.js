class JsCodewars extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="codewars"></main>
    </section>
    `;
    this.className = 'js-codewars';
  }
}

customElements.define('js-codewars', JsCodewars);
