class JsDom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-dom';
  }
}

customElements.define('js-dom', JsDom);
