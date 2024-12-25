class Stepik extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside stepik">
      <aside class="aside"></aside>
      <main class="main" id="stepik"></main>
    </section>
    `;
    this.className = 'alg-stepik';
  }
}

customElements.define('alg-stepik', Stepik);
