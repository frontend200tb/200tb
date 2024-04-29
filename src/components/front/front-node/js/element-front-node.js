class FrontNode extends HTMLElement {
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

customElements.define('front-node', FrontNode);
