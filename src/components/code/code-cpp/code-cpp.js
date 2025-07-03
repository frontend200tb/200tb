/** *******************
Скрипт из файла code-cpp.js
Функция showCodeC показывает страницу code-cpp
Навигация по теме Cpp
Основы Конспекты книг Конспекты курсов
******************** */
import './element-cpp';
import {dataCppNav} from './data-cpp-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataCppNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const cpp = document.getElementById('cpp');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      cpp.innerHTML = el.content;
      el.act();
    });
  });
}

function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function showCodeCpp() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataCppNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataCppNav[0].elem.dispatchEvent(eventClick);
}
