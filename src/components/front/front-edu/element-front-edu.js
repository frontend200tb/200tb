import './elem-edu-edu';

class FrontEdu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="front-edu" id="front-edu">
      <section class="main__aside">
        <aside class="aside"></aside>
        <main class="main" id="edu">
          <edu-edu></edu-edu>
        </main>
      </section>
    </div>
    `;
  }
}

customElements.define('front-edu', FrontEdu);
