/** **************
Скрипт из файла theme.js
****************** */
/* Алгоритм работы
1. Создаем касс ThemeBtn
2. Добавляем элемент theme-btn (экземпляр класса ThemeBtn) в customElements
*/

const page = document.querySelector('#page');
const stick = document.querySelector('.header-fixed');

// 1. Создаем касс ThemeBtn
class ThemeBtn extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', () => {
      themeToggle();
      saveTheme();
    });

    function themeToggle() {
      page.classList.toggle('dark-theme');
      stick.classList.toggle('dark-theme');
    }

    // Функция saveTheme() сохранит настройки темы в localStorage
    function saveTheme() {
      currentTheme = page.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    }

    // Берем настройки из localStorage, если их нет то пусть будет снег будет светлая тема
    let currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme == 'dark') {
      page.classList.add('dark-theme');
      stick.classList.add('dark-theme');
}
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="theme_btn" class="theme_btn"></div>
    `;
  }
}

// 2. Добавляем элемент theme-btn (экземпляр класса ThemeBtn) в customElements
customElements.define('theme-btn', ThemeBtn);
