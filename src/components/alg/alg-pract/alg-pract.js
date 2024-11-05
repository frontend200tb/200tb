/** **************
Скрипт из файла alg-pract.js
Навигация по теме Практика
Codewars Coderun Leetcode
****************** */
import './element-pract';
import {dataPractNav} from './data-pract-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataPractNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const htmlPractice = document.getElementById('pract');
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

export default function showAlgPract() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataPractNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataPractNav[0].elem.dispatchEvent(eventClick);
}
