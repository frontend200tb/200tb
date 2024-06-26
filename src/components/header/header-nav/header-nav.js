/****************
Скрипт из файла header-nav.js
Навигация по сайту
Code Frontend
******************/
import dataHeaderNav from './data-header-nav';
import createNav from '../../Nav/Nav.component';

const headerNav = document.getElementById('header__nav');
const main = document.getElementById('maincomponent');

export let endUrl = '/index.html';

// 1. Создаем ссылки для меню header_nav из массива dataHeaderNav
createHeaderNav(dataHeaderNav);
renderHeaderNav();

function createHeaderNav(dataHeaderNav) {
  dataHeaderNav.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = el.url;
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(dataHeaderNav, el.elem);
      endUrl = el.url;
      main.innerHTML = el.content;
      createNav();
      el.act();
    });
  });
}

function renderHeaderNav() {
  dataHeaderNav.forEach((el) => {
    headerNav.appendChild(el.elem);
  });
  classActive(dataHeaderNav, dataHeaderNav[1].elem);
  main.innerHTML = dataHeaderNav[1].content;
  createNav();
  dataHeaderNav[1].act();
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}
