class PascalBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'pascal-books';
  }
}

customElements.define('pascal-books', PascalBooks);
