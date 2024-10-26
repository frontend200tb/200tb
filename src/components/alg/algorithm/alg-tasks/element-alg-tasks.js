class AlgTasks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside tasks">
      <aside class="aside"></aside>
      <main class="main" id="tasks"></main>
    </section>
    `;
    this.className = 'alg-tasks';
  }
}

customElements.define('alg-tasks', AlgTasks);
