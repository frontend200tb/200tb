/** **************
Скрипт из файла set-btn.js
****************** */
/* Алгоритм работы
1. Создаем элемент с id="set-btn"
2. Добавляем элемент с id="set-btn" в customElements
3. Если есть setBtn и setSection
*/

// 1. Создаем элемент с id="set-btn"
class SetBtn extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', setToggle);
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="set-btn" class="set-btn"></div>
    `;
  }
}

// 2. Добавляем элемент с id="set-btn" в customElements
customElements.define('set-btn', SetBtn);

const setBtn = document.querySelector('#set-btn');
const setSection = document.querySelector('#set-section');
const nav = document.querySelector('#nav');

function setToggle() {
  setSection.classList.toggle('none');
  if (!setSection.classList.contains('none')) {
    nav.style.marginTop = '80px';
  } else {
    nav.style.marginTop = '10px';
  }
}
