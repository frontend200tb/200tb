class CBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'c-books';
  }
}

customElements.define('c-books', CBooks);
