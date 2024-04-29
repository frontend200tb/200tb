class FrontVacancy extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-vacancy" id="front-vacancy">
      <h1>Вакансии</h1>
      <section class="main__aside">
      </section>
    </div>
    `;
  }
}

customElements.define('front-vacancy', FrontVacancy);
