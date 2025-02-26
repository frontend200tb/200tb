class CodeTs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-ts';
  }
}

customElements.define('code-ts', CodeTs);
