class JsCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'js-courses';
  }
}

customElements.define('js-courses', JsCourses);
