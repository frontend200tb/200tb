class FrontBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'front-base';
  }
}

customElements.define('front-base', FrontBase);
