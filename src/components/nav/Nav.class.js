import html from './Nav.component.html';

class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('nav-component', Nav);
