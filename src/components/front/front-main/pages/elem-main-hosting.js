import html from './elem-main-hosting.html';

class MainHosting extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('main-hosting', MainHosting);
