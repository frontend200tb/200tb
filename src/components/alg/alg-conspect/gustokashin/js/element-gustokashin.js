class Gustokashin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-gustokashin';
  }
}

customElements.define('alg-gustokashin', Gustokashin);
