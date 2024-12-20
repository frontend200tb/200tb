class JsDom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="dom"></main>
    </section>
    `;
    this.className = 'js-dom';
  }
}

customElements.define('js-dom', JsDom);
