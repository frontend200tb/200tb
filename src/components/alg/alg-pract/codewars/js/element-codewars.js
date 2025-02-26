class Codewars extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-codewars';
  }
}

customElements.define('alg-codewars', Codewars);
