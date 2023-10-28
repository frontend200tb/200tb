/** **************
Скрипт из файла nav.js
News Auto Books Mail Programs Shops
Audio Books Films Links Music Radio Youtube
Links Books Shops Youtube
Frontend Books Code Edu Learned Node Offline Tools Vacancy Video Youtube
****************** */

import { dataNavFront } from './data-nav';
import { endUrl } from '../header/header-nav/header-nav';

const nav = document.getElementById('nav');
const main = document.getElementById('main');

/** **************
4. nav для страниц frontend
**************** */

// 4.1 Создаем ссылки из массива dataNavFront
createNavFront(dataNavFront);

function createNavFront(navFront) {
  navFront.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(navFront, el.elem);
      main.innerHTML = el.content;
      el.act();
    });
  });
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function createNav() {
  // 4.2 Добавим ссылки navFront в nav если адрес index.html
  if (endUrl === '/index.html') {
    nav.innerHTML = '';
    dataNavFront.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
  }
}
