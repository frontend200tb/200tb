class Rounds extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-rounds';
  }
}

customElements.define('alg-rounds', Rounds);
