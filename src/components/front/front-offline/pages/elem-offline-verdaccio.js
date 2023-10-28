import html from './elem-offline-verdaccio.html';

class OfflineVerdaccio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-verdaccio', OfflineVerdaccio);
