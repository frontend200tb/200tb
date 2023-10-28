import html from './elem-offline-articles.html';

class OfflineArticles extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('offline-articles', OfflineArticles);
