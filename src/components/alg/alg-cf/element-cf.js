class AlgCf extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-cf" id="alg-cf">
      <h1>Codeforces</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="cf"></div>
    </div>
    `;
    this.className = 'alg-cf';
  }
}

customElements.define('alg-cf', AlgCf);
