class Kurs1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-kurs1';
  }
}

customElements.define('alg-kurs1', Kurs1);
