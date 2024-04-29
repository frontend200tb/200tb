class Algorithm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Аллгоритмы на JS</h1>
    <nav class="nav" id="main-nav"></nav>
    <div class="algorithm" id="algorithm"></div>
    `;
    this.className = 'base-algorithm';
  }
}

customElements.define('base-algorithm', Algorithm);
