// index.js -> header/header.js -> header-nav/header-nav.js


/** **************
Скрипт из файла header-nav.js
написан для header > header__first-row > header-nav
навигация по сайту
News Lang Bench Code Frontend
****************** */
/*
Алгоритм работы
1. Создаем ссылки для меню header_nav
2. Создаем массив данных для ссылок
3. Создаем префикс пути для ссылок
4. Добавляем адрес в аттрибут href ссылок
5. Добавим ссылки в header__nav
*/

import dataHeaderNav from './data-header-nav';
import createNav from '../../nav/nav';

const headerNav = document.getElementById('header__nav');
const main = document.getElementById('main');

export let endUrl = '/index.html';

// все переменные для навигации по страницам моего SPA записываем в объект MyHref
const MyHref = {};
// определяем url текущей страницы
MyHref.current = window.location.href;
// проверяем как заканчивается url: index.html или /
MyHref.li = MyHref.current.lastIndexOf('index.html');

// создаем базовый url
if (MyHref.current[MyHref.current.length - 1] === '/') {
  MyHref.base = MyHref.current;
}

if (MyHref.li !== '-1') {
  MyHref.base = MyHref.current.slice(0, MyHref.li);
}


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
      // добавим History API
      changeHistory(el.text, el.url)
      el.act();
    });
  });
}

function changeHistory(name = {}, url = '') {
  try {
    history.pushState(name, null, url);
  } catch (err) {
    // console.error('history.pushState error');
  }
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
