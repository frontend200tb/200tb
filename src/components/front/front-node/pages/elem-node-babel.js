import html from './elem-node-babel.html';

class NodeBabel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-babel', NodeBabel);
