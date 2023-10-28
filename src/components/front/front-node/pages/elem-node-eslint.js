import html from './elem-node-eslint.html';

class NodeEslint extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-eslint', NodeEslint);
