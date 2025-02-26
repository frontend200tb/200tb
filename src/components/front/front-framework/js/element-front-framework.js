class FrontFramework extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'front-framework';
  }
}

customElements.define('front-framework', FrontFramework);
