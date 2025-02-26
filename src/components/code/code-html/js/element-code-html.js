class CodeHtml extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-html';
  }
}

customElements.define('code-html', CodeHtml);
