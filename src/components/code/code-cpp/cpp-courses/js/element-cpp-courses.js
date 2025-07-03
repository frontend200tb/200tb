class CppCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cpp-courses';
  }
}

customElements.define('cpp-courses', CppCourses);
