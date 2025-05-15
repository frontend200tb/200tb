class LibYt extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Каналы с YouTube</h1>
    `;
    this.className = 'lib-yt';
  }
}

customElements.define('lib-yt', LibYt);
