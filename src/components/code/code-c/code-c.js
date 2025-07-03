/** *******************
Скрипт из файла code-c.js
Функция showCodeC показывает страницу code-c
Навигация по теме C
Основы Конспекты книг Конспекты курсов
******************** */
import './element-c';
import {dataCNav} from './data-c-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataCNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const c = document.getElementById('c');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      c.innerHTML = el.content;
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

export default function showCodeC() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataCNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataCNav[0].elem.dispatchEvent(eventClick);
}
