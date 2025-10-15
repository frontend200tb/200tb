/******************
Скрипт из файла alg-ta.js
Навигация по теме Тренировки по алгоритмам
1.0 2.0 3.0 4.0 5.0 6.0 7.0 8.0
*******************/
import './element-ta';
import {dataTaNav} from './data-ta-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataTaNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const ta = document.getElementById('ta');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      ta.innerHTML = el.content;
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

export default function showAlgTa() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataTaNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataTaNav[0].elem.dispatchEvent(eventClick);
}
