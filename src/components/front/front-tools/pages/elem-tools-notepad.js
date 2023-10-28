import html from './elem-tools-notepad.html';

class ToolsNotepad extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('tools-notepad', ToolsNotepad);
