import html from './elem-code-pug.html';

class CodePug extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('code-pug', CodePug);
