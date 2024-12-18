class CodeC extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="code"></main>
    </section>
    `;
    this.className = 'code-c';
  }
}

customElements.define('code-c', CodeC);
