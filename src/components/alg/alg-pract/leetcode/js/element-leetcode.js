class Leetcode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-leetcode';
  }
}

customElements.define('alg-leetcode', Leetcode);
