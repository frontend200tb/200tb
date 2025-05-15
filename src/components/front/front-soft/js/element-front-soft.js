class FrontSoft extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'front-soft';
  }
}

customElements.define('front-soft', FrontSoft);
