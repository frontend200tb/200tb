class CCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'c-courses';
  }
}

customElements.define('c-courses', CCourses);
