class FrontLearned extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'front-learned';
  }
}

customElements.define('front-learned', FrontLearned);
