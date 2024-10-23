class FrontYt extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>YouTube channels for Frontend developers</h1>
    `;
    this.className = 'front-yt';
  }
}

customElements.define('front-yt', FrontYt);
