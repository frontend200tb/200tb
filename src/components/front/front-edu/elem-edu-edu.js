import html from './elem-edu-edu.html';

class EduEdu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('edu-edu', EduEdu);
