class AlTheory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'al-theory';
  }
}

customElements.define('al-theory', AlTheory);
