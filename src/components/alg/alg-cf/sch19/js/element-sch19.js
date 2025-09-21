class Sch19 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-sch19';
  }
}

customElements.define('alg-sch19', Sch19);
