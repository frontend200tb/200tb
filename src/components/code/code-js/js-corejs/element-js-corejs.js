class JsCorejs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="corejs"></main>
    </section>
    `;
    this.className = 'js-corejs';
  }
}

customElements.define('js-corejs', JsCorejs);
