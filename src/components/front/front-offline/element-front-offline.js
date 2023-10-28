class FrontOffline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-offline" id="front-offline">
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="list" id="offline"></main>
      </section>
    </div>
    `;
  }
}

customElements.define('front-offline', FrontOffline);
