class Allcups extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-allcups';
  }
}

customElements.define('alg-allcups', Allcups);
