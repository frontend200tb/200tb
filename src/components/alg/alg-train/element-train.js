class AlgTrain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-train" id="alg-train">
      <h1>Алгоритмы</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="train"></div>
    </div>
    `;
    this.className = 'alg-train';
  }
}

customElements.define('alg-train', AlgTrain);
