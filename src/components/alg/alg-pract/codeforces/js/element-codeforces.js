class Codeforces extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-codeforces';
  }
}

customElements.define('alg-codeforces', Codeforces);
