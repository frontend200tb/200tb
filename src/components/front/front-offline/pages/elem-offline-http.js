import html from './elem-offline-http.html';

class OfflineHttp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-http', OfflineHttp);
