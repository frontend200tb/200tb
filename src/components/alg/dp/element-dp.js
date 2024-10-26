class AlgDp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-dp" id="alg-dp">
      <h1>Динамическое программирование</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="dp"></div>
    </div>
    `;
    this.className = 'alg-dp';
  }
}

customElements.define('alg-dp', AlgDp);
