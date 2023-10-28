import html from './elem-learned-all.html';

class LearnedAll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-all', LearnedAll);
