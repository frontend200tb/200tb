class Fatin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside fatin">
      <aside class="aside"></aside>
      <main class="main" id="fatin"></main>
    </section>
    `;
    this.className = 'alg-fatin';
  }
}

customElements.define('alg-fatin', Fatin);
