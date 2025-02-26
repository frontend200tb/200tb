class FrontArticles extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
      </section>
    `;
    this.className = 'front-articles';
  }
}

customElements.define('front-articles', FrontArticles);
