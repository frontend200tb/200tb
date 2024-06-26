import html from './Header.component.html';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
    this.className = 'header-fixed page_dodgerblue';
  }
}

customElements.define('header-component', Header);
