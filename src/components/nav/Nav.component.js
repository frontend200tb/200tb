/** **************
Скрипт из файла nav.js
создает ссылки в меню nav для каждого пункта меню header_nav
Alg      Алгоритмы Конспекты Практика
Code     HTML CSS JS TS Pascal C/C++ Asm Other Справка
Frontend Edu Learned Node Offline Online Vacancy
Lib      Books Video Youtube
****************** */

import './Nav.class';
import {dataNavAlg, dataNavCode, dataNavFront, dataNavLib} from './data-nav';
import { endUrl } from '../Header/header-nav/header-nav';

const nav = document.getElementById('nav');
const main = document.getElementById('maincomponent');

/** **************
1. nav для страниц alg
**************** */

// 1.1 Создаем ссылки из массива dataNavAlg
createNavAlg(dataNavAlg);

function createNavAlg(navCode) {
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
2. nav для страниц code
**************** */

// 2.1 Создаем ссылки из массива dataNavCode
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
3. nav для страниц frontend
**************** */

// 3.1 Создаем ссылки из массива dataNavFront
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

/** **************
4. nav для страниц lib
**************** */

// 4.1 Создаем ссылки из массива dataNavLib
createNavLib(dataNavLib);

function createNavLib(navLib) {
  navLib.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(navLib, el.elem);
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
  // 1.2 Добавим ссылки navAlg в nav если адрес alg.html
  if (endUrl === '/alg.html') {
    nav.innerHTML = '';
    dataNavAlg.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavAlg[0].elem.classList.add('active');
  }

  // 2.2 Добавим ссылки navCode в nav если адрес code.html
  if (endUrl === '/code.html') {
    nav.innerHTML = '';
    dataNavCode.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavCode[0].elem.classList.add('active');
  }

  // 3.2 Добавим ссылки navFront в nav если адрес index.html
  if (endUrl === '/index.html') {
    nav.innerHTML = '';
    dataNavFront.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavFront[0].elem.classList.add('active');
  }

  // 4.2 Добавим ссылки navLib в nav если адрес lib.html
  if (endUrl === '/lib.html') {
    nav.innerHTML = '';
    dataNavLib.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavLib[0].elem.classList.add('active');
  }
}
