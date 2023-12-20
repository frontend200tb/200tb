import html from './elem-search-form.html';

class SearchForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('search-form', SearchForm);
