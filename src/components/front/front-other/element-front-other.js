class FrontOther extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="list" id="other"></main>
      </section>
    `;
    this.className = 'front-other';
  }
}

customElements.define('front-other', FrontOther);
