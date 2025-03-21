class CBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'c-base';
  }
}

customElements.define('c-base', CBase);
