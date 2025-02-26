class CodeOther extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-other';
  }
}

customElements.define('code-other', CodeOther);
