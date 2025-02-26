class Kurs2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-kurs2';
  }
}

customElements.define('alg-kurs2', Kurs2);
