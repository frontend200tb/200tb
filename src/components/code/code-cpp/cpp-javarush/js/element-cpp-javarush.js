class CppJavarush extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cpp-javarush';
  }
}

customElements.define('cpp-javarush', CppJavarush);
