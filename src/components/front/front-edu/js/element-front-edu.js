class FrontEdu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
  }
}

customElements.define('front-edu', FrontEdu);
