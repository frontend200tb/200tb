class Coderun extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-coderun';
  }
}

customElements.define('alg-coderun', Coderun);
