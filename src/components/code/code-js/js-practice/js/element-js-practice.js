class JsPractice extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-practice';
  }
}

customElements.define('js-practice', JsPractice);
