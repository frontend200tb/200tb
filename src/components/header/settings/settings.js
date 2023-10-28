import './_settings.scss';
import './set-view/set-view';

class Settings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="settings" class="settings">
      <div class="set-up-btn">
        <set-btn></set-btn>
      </div>
      <div id="set-section" class="set-section none">
        <set-color></set-color>
        <set-view></set-view>
      </div>
    </div>
    `;
  }
}

customElements.define('settings-component', Settings);
