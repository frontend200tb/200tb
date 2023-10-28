import html from './elem-learned-video.html';

class LearnedVideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-video', LearnedVideo);
