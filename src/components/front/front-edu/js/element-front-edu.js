class FrontEdu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-edu" id="front-edu">
      <section class="main__aside">
      </section>
    </div>
    `;
  }
}

customElements.define('front-edu', FrontEdu);
