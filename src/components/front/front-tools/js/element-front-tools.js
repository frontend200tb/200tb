class FrontTools extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'front-tools';
  }
}

customElements.define('front-tools', FrontTools);
