class AlgPract extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-practice" id="alg-practice">
      <h1>Практика</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="pract"></div>
    </div>
    `;
    this.className = 'alg-pract';
  }
}

customElements.define('alg-pract', AlgPract);
