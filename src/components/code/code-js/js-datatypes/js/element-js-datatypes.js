class JsDatatypes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-datatypes';
  }
}

customElements.define('js-datatypes', JsDatatypes);
