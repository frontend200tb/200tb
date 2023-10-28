import html from './elem-node-gulp.html';

class NodeGulp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('node-gulp', NodeGulp);
