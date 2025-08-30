class JsBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-books';
  }
}

customElements.define('js-books', JsBooks);
