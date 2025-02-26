class JsCorejs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-corejs';
  }
}

customElements.define('js-corejs', JsCorejs);
