/** **************
Скрипт из файла practice.js
Навигация по теме Практика
Codewars Coderun Leetcode
****************** */
import './element-practice';
import {dataPracticeNav} from './data-practice-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataPracticeNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const htmlPractice = document.getElementById('practice');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      htmlPractice.innerHTML = el.content;
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

export default function showAlgPractice() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataPracticeNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataPracticeNav[0].elem.dispatchEvent(eventClick);
}
