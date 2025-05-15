class LibVk extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Каналы с vkvideo</h1>
    `;
    this.className = 'lib-vk';
  }
}

customElements.define('lib-vk', LibVk);
