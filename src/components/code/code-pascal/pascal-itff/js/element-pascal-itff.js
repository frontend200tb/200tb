class PascalItff extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'pascal-itff';
  }
}

customElements.define('pascal-itff', PascalItff);
