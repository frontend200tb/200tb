import html from './elem-node-angular.html';

class NodeAngular extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-angular', NodeAngular);
