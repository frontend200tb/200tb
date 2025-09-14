class AlgCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-courses';
  }
}

customElements.define('alg-courses', AlgCourses);
