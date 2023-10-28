import html from './elem-learned-books.html';

class LearnedBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-books', LearnedBooks);
