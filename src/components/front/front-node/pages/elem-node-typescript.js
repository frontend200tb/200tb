import html from './elem-node-typescript.html';

class NodeTypescript extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-typescript', NodeTypescript);
