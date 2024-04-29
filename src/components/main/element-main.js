class Main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.id = 'maincomponent';
  }
}

customElements.define('main-component', Main);
