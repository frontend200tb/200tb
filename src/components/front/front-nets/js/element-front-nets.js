class FrontNets extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
      </section>
    `;
    this.className = 'front-nets';
  }
}

customElements.define('front-nets', FrontNets);
