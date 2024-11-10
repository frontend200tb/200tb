/******************
Скрипт из файла alg-dp.js
Функция showAlgDp показывает страницу alg-dp
Навигация по теме Динамическое программирование
Теория
********************/
import './element-dp';
import {dataDpNav} from './data-dp-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataDpNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const dp = document.getElementById('dp');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      dp.innerHTML = el.content;
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

export default function showAlgDp() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataDpNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataDpNav[0].elem.dispatchEvent(eventClick);
}
