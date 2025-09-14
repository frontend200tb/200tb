class AlgConspect extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="alg-conspect" id="alg-conspect">
      <h1>Конспекты</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="conspect"></div>
    </div>
    `;
    this.className = 'alg-conspect';
  }
}

customElements.define('alg-conspect', AlgConspect);
