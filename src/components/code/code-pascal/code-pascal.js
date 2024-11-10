/** *******************
Скрипт из файла code-pascal.js
Функция showCodePascal показывает страницу code-pascal
Навигация по теме Pascal
Основы ITFF
******************** */
// импорт scss
import './_pascal.scss';
import './element-pascal';
import {dataPascalNav} from './data-pascal-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataPascalNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const pascal = document.getElementById('pascal');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      pascal.innerHTML = el.content;
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

export default function showCodePascal() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataPascalNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataPascalNav[0].elem.dispatchEvent(eventClick);
}
