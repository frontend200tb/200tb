class JsLeetcode extends HTMLElement {
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
    this.className = 'js-leetcode';
  }
}

customElements.define('js-leetcode', JsLeetcode);
