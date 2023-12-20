import html from './elem-settings.html';

class Settings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('settings-component', Settings);
