class AlgPractice extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-practice" id="alg-practice">
      <h1>Практика</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="practice"></div>
    </div>
    `;
    this.className = 'alg-practice';
  }
}

customElements.define('alg-practice', AlgPractice);
