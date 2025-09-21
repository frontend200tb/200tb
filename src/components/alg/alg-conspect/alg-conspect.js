/******************
Скрипт из файла alg-conspect.js
Навигация по теме Конспекты
МГ МФ ФТЛ 1580 Stepik Книги Курсы
*******************/
import './element-conspect';
import {dataConspectNav} from './data-conspect-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataConspectNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const algorithm = document.getElementById('conspect');
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

export default function showAlgConspect() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataConspectNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataConspectNav[0].elem.dispatchEvent(eventClick);
}
