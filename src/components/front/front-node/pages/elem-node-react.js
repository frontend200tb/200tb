import html from './elem-node-react.html';

class NodeReact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-react', NodeReact);
