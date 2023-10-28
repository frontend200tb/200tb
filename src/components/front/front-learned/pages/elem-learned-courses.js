import html from './elem-learned-courses.html';

class LearnedCourses extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('learned-courses', LearnedCourses);
