class CppBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cpp-books';
  }
}

customElements.define('cpp-books', CppBooks);
