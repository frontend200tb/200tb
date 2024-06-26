/** **************
Скрипт из файла nav.js
создает ссылки в меню nav для каждого пункта меню header_nav
Code HTML CSS JS TS C# Markdown Pug Sass Php Pascal
Frontend Books Edu Learned Node Offline Vacancy Video Youtube
****************** */

import './Nav.class';
import {dataNavCode, dataNavFront} from './data-nav';
import { endUrl } from '../Header/header-nav/header-nav';

const nav = document.getElementById('nav');
const main = document.getElementById('maincomponent');

/** **************
1. nav для страниц code
**************** */

// 4.1 Создаем ссылки из массива dataNavCode
createNavCode(dataNavCode);

function createNavCode(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      main.innerHTML = el.content;
      el.act();
    });
  });
}

/** **************
2. nav для страниц frontend
**************** */

// 5.1 Создаем ссылки из массива dataNavFront
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
  // 1.2 Добавим ссылки navCode в nav если адрес code.html
  if (endUrl === '/code.html') {
    nav.innerHTML = '';
    dataNavCode.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavCode[0].elem.classList.add('active');
  }

  // 2.2 Добавим ссылки navFront в nav если адрес index.html
  if (endUrl === '/index.html') {
    nav.innerHTML = '';
    dataNavFront.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
  }
}
