/** **************
Скрипт из файла header-nav.js
написан для header > header__first-row > header-nav
навигация по сайту
News Lang Bench Frontend
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
      // добавим History API
      // history.pushState({}, '', currentUrl.replace(endUrl, el.url));
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
  classActive(dataHeaderNav, dataHeaderNav[0].elem);
  main.innerHTML = dataHeaderNav[0].content;
  createNav();
  dataHeaderNav[0].act();
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

/*
Свойства объекта Location
Все следующие свойства являются строками.

Пример url http://www.google.com:80/search?q=javascript#test

window.location.href = "http://www.google.com:80/search?q=javascript#test"- весь URL;

window.location.origin = "http://www.google.com:80" - Базовый URL (Протокол + имя хоста + номер порта);

window.location.protocol = "http:"- Протокол (http: или https);

window.location.host = "www.google.com:80" -хост и порт;
хост это доменное имя

window.location.hostname = "www.google.com" - хост (без порта);

window.location.port = "80" - номер порта;

window.location.pathname = "/search" строка пути (относительно хоста);

window.location.search = "?q=javascript" - часть адреса после символа ?, включая символ ?;

window.location.hash = "#test"	- часть URL, которая идет после символа решетки '#', включая символ '#';

*/
