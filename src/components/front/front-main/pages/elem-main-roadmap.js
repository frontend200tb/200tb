import html from './elem-main-roadmap.html';

class MainRoadmap extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('main-roadmap', MainRoadmap);
