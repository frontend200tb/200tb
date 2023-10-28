import html from './elem-offline-algorithm.html';

class OfflineAlgorithm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-algorithm', OfflineAlgorithm);
