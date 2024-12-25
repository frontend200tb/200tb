class Kurs1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside kurs1">
      <aside class="aside"></aside>
      <main class="main" id="kurs1"></main>
    </section>
    `;
    this.className = 'alg-kurs1';
  }
}

customElements.define('alg-kurs1', Kurs1);
