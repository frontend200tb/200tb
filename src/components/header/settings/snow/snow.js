/** **************
Скрипт из файла snow.js
****************** */
/* Алгоритм работы
1. Создаем касс SnowBtn
2. Добавляем элемент snow-btn (экземпляр класса SnowBtn) в customElements
*/

const page = document.querySelector('#page');

// 1. Создаем касс SnowBtn
class SnowBtn extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', () => {
      snowToggle();
      saveSnow();
    });

    function snowToggle() {
      page.classList.toggle('snow');
    }

    // Функция saveSnow() сохранит настройки снега в localStorage
    function saveSnow() {
      currentSnow = page.classList.contains('snow') ? 'snow' : 'net';
      localStorage.setItem('snow', currentSnow);
    }

    // Берем настройки из localStorage, если их нет то пусть будет снег
    let currentSnow = localStorage.getItem('snow') || 'snow';
    if (currentSnow == 'snow') {
      page.classList.add('snow');
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="snow_btn" class="snow_btn"></div>
    `;
  }
}

// 2. Добавляем элемент snow-btn (экземпляр класса SnowBtn) в customElements
customElements.define('snow-btn', SnowBtn);
