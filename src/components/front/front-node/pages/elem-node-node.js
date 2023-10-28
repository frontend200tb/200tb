import html from './elem-node-node.html';

class NodeNode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-node', NodeNode);
