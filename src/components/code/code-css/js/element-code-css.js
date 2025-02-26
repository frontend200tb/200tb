class CodeCss extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-css';
  }
}

customElements.define('code-css', CodeCss);
