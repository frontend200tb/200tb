class Algorithm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="algorithm" id="algorithm">
      <h1>Алгоритмы</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="alg"></div>
    </div>
    `;
    this.className = 'base-algorithm';
  }
}

customElements.define('base-algorithm', Algorithm);
