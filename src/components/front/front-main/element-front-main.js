import html from './element-front-main.html';

class FrontMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
    this.className = 'front-main';
  }
}

customElements.define('front-main', FrontMain);
