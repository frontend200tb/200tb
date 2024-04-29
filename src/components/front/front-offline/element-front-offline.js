class FrontOffline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Frontend справочник</h1>
    <nav class="nav" id="main-nav"></nav>
    <div id="offline"></div>
    `;
    this.className = 'front-offline';
  }
}

customElements.define('front-offline', FrontOffline);
