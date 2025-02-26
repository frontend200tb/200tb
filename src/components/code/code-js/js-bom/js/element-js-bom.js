class JsBom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-bom';
  }
}

customElements.define('js-bom', JsBom);
