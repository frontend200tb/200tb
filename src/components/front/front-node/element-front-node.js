class FrontNode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-node" id="front-node">

      <h1>Node Programs</h1>

      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="list" id="node"></main>
      </section>
    </div>
    `;
  }
}

customElements.define('front-node', FrontNode);
