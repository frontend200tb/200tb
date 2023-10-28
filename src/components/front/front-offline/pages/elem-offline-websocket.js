import html from './elem-offline-websocket.html';

class OfflineWebsocket extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-websocket', OfflineWebsocket);
