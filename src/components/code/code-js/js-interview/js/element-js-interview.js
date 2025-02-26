class JsInterview extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-interview';
  }
}

customElements.define('js-interview', JsInterview);
