class JsDatatypes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="datatypes"></main>
    </section>
    `;
    this.className = 'js-datatypes';
  }
}

customElements.define('js-datatypes', JsDatatypes);
