class CodeCpp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="code-cpp" id="code-cpp">
      <h1>C++</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="cpp"></div>
    </div>
    `;
    this.className = 'code-cpp';
  }
}

customElements.define('code-cpp', CodeCpp);
