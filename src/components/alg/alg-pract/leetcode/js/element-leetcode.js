class Leetcode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
      <aside class="aside"></aside>
      <main class="main" id="leetcode"></main>
    </section>
    `;
    this.className = 'alg-leetcode';
  }
}

customElements.define('alg-leetcode', Leetcode);
