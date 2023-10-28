import html from './elem-main-playground.html';

class MainPlayground extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('main-playground', MainPlayground);
