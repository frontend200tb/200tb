class AlgTa extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-ta" id="alg-ta">
      <h1>Тренировки по алгоритмам</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="ta"></div>
    </div>
    `;
    this.className = 'alg-ta';
  }
}

customElements.define('alg-ta', AlgTa);
