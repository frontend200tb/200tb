import html from './elem-node-webpack.html';

class NodeWebpack extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-webpack', NodeWebpack);
