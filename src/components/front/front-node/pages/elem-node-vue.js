import html from './elem-node-vue.html';

class NodeVue extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-vue', NodeVue);
