import html from './elem-offline-haq.html';

class OfflineHaq extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-haq', OfflineHaq);
