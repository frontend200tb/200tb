import html from './elem-social-icons.html';

class SocialIcons extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('social-icons', SocialIcons);
