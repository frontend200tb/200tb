class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header__first-row container">
      <div class="header__logo">frontend200tb</div>
      <div id="header__nav" class="header__nav"></div>  
    </div>
    
    <div class="header__second-row container">
      <social-icons></social-icons>
      <settings-component></settings-component>
    </div>

    <search-form></search-form>
    `;
  }
}

customElements.define('header-component', Header);
