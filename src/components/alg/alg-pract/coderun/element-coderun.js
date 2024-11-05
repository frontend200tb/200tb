class Coderun extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside coderun">
      <aside class="aside"></aside>
      <main class="main" id="coderun"></main>
    </section>
    `;
    this.className = 'alg-coderun';
  }
}

customElements.define('alg-coderun', Coderun);
