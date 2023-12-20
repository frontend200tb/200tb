class FrontTools extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="list" id="tools"></main>
    </section>
    `;
    this.className = 'front-tools';
  }
}

customElements.define('front-tools', FrontTools);
