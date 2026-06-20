class WebJavarush extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'web-javarush';
  }
}

customElements.define('web-javarush', WebJavarush);
