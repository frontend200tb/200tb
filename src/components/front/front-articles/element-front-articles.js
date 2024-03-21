class FrontArticles extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="main" id="articles"></main>
      </section>
    `;
    this.className = 'front-articles';
  }
}

customElements.define('front-articles', FrontArticles);
