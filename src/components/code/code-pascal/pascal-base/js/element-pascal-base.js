class PascalBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'pascal-base';
  }
}

customElements.define('pascal-base', PascalBase);
