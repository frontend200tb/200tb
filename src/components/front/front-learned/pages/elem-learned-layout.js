import html from './elem-learned-layout.html';

class LearnedLayout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-layout', LearnedLayout);
