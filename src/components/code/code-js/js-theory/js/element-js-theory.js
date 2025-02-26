class JsTheory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-theory';
  }
}

customElements.define('js-theory', JsTheory);
