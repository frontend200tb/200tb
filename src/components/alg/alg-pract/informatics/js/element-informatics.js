class Informatics extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-informatics';
  }
}

customElements.define('alg-informatics', Informatics);
