import html from './elem-node-vite.html';

class NodeVite extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-vite', NodeVite);
