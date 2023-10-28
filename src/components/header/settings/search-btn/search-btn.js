/** **************
Скрипт из файла search.js
*************** */
/* Алгоритм работы
1. Создаем элемент с id="search-btn"
2. Добавляем элемент с id="search-btn" в customElements
3. Если есть searchBtn и searchGoogle
*/

// 1. Создаем элемент с id="search-btn"
class SearchBtn extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', searchFormToggle);
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="search-btn" class="search-btn"></div>
    `;
  }
}

// 2. Добавляем элемент с id="search_btn" в customElements
customElements.define('search-btn', SearchBtn);

const searchBtn = document.querySelector('#search-btn');
const searchGoogle = document.querySelector('#search-google');

function searchFormToggle() {
  searchGoogle.classList.toggle('none');
}
