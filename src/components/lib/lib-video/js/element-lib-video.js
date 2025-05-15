class LibVideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Мои видео по программированию</h1>
    `;
    this.className = 'lib-video';
  }
}

customElements.define('lib-video', LibVideo);
