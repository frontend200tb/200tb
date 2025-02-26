class Stepik extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-stepik';
  }
}

customElements.define('alg-stepik', Stepik);
