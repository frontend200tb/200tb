/******************
Скрипт из файла alg-train.js
Навигация по теме Подготовка
Фатин Густокашин
*******************/
import './element-train';
import {dataTrainNav} from './data-train-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataTrainNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const algorithm = document.getElementById('train');
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

export default function showAlgTrain() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataTrainNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataTrainNav[0].elem.dispatchEvent(eventClick);
}
