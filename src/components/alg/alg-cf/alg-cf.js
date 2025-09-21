/******************
Скрипт из файла alg-cf.js
Навигация по теме Конспекты
Rounds ЯрГу1 ЯрГУ2 ЯрГУ3 МИРЭА Sch19
*******************/
import './element-cf';
import {dataCfNav} from './data-cf-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataCfNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const algorithm = document.getElementById('cf');
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

export default function showAlgCf() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataCfNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataCfNav[0].elem.dispatchEvent(eventClick);
}
