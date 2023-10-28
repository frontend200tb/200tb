import html from './elem-node-axios.html';

class NodeAxios extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-axios', NodeAxios);
