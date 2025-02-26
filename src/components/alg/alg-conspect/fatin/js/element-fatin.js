class Fatin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-fatin';
  }
}

customElements.define('alg-fatin', Fatin);
