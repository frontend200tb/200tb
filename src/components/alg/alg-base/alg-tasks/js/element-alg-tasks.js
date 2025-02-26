class AlgTasks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'alg-tasks';
  }
}

customElements.define('alg-tasks', AlgTasks);
