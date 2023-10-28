import html from './elem-learned-youtube.html';

class LearnedYoutube extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-youtube', LearnedYoutube);
