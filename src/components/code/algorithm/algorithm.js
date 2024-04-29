/** **************
Скрипт из файла algorithm.js
Навигация по теме Алгоритмы
Теория Codewars Coderun Leetcode
****************** */
import './element-algorithm';
import {dataAlgorithmNav} from './data-algorithm-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataAlgorithmNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const algorithm = document.getElementById('algorithm');
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

export default function showAlgorithm() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataAlgorithmNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataAlgorithmNav[0].elem.dispatchEvent(eventClick);
}
