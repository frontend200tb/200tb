class Kurs2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside kurs2">
      <aside class="aside"></aside>
      <main class="main" id="kurs2"></main>
    </section>
    `;
    this.className = 'alg-kurs2';
  }
}

customElements.define('alg-kurs2', Kurs2);
