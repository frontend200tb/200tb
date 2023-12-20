class FrontOffline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-offline" id="front-offline">
      <h1>Frontend справочник</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="offline"></div>
    </div>
    `;
  }
}

customElements.define('front-offline', FrontOffline);
