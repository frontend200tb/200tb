class CppBase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cpp-base';
  }
}

customElements.define('cpp-base', CppBase);
