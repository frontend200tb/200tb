class FrontTools extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-tools" id="front-tools">

      <h1>Инструменты фронтенд разработчика</h1>

      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="list" id="tools"></main>
      </section>
    </div>
    `;
  }
}

customElements.define('front-tools', FrontTools);
