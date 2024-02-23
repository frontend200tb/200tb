class FrontNode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-node" id="front-node">
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="main" id="node"></main>
      </section>
    </div>
    `;
  }
}

customElements.define('front-node', FrontNode);
