import '../theme/theme';
import '../snow/snow';
import '../search-btn/search-btn';

class SetView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="set-view">
      <theme-btn></theme-btn>
      <snow-btn></snow-btn>
      <search-btn></search-btn>
    </div>
    `;
  }
}

customElements.define('set-view', SetView);
