class FrontOnline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
  }
}

customElements.define('front-online', FrontOnline);
