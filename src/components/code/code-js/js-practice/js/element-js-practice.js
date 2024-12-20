class JsPractice extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="practice"></main>
    </section>
    `;
    this.className = 'js-practice';
  }
}

customElements.define('js-practice', JsPractice);
