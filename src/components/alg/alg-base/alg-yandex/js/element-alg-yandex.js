class AlgYandex extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-yandex';
  }
}

customElements.define('alg-yandex', AlgYandex);
