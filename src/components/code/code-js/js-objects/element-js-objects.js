class JsObjects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="objects"></main>
    </section>
    `;
    this.className = 'js-objects';
  }
}

customElements.define('js-objects', JsObjects);
