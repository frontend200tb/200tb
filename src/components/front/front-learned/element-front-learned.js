class FrontLearned extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="list" id="learned"></main>
    </section>
    `;
    this.className = 'front-learned';
  }
}

customElements.define('front-learned', FrontLearned);
