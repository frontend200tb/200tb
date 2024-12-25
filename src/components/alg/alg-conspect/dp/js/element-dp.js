class Dp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-dp';
  }
}

customElements.define('alg-dp', Dp);
