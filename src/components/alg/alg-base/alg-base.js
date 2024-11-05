/******************
Скрипт из файла alg-base.js
Навигация по теме Алгоритмы
Теория Задачи Яндекс
*******************/
import './element-alg';
import {dataAlgNav} from './data-alg-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataAlgNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const algorithm = document.getElementById('alg');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      algorithm.innerHTML = el.content;
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

export default function showAlgBase() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataAlgNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataAlgNav[0].elem.dispatchEvent(eventClick);
}
