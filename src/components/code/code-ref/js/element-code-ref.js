class CodeRef extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'code-ref';
  }
}

customElements.define('code-ref', CodeRef);
