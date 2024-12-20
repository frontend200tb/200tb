class Timus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside timus">
      <aside class="aside"></aside>
      <main class="main" id="timus"></main>
    </section>
    `;
    this.className = 'alg-timus';
  }
}

customElements.define('alg-timus', Timus);
