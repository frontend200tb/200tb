class LibBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Моя библиотека книг по программированию</h1>
    `;
    this.className = 'lib-books';
  }
}

customElements.define('lib-books', LibBooks);
