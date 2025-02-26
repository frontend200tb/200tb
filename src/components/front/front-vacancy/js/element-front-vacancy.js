class FrontVacancy extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="main__aside">
      </section>
    `;
    this.className = 'front-vacancy';
  }
}

customElements.define('front-vacancy', FrontVacancy);
