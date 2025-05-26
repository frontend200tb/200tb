class AsmCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'asm-courses';
  }
}

customElements.define('asm-courses', AsmCourses);
