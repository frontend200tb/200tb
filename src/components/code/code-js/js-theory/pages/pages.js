/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlJs from './elem-js.html';
import htmlEventloop from './elem-eventloop.html';
import htmlPrototype from './elem-prototype.html';
import htmlScope from './elem-scope.html';
import htmlAscii from './elem-ascii.html';
import htmlUnicode from './elem-unicode.html';

// Event Loop
import htmlEventloopTask from './elem-eventloop-task.html';

// массив страниц из aside menu
const aside = [
  htmlJs,
  htmlEventloop,
  htmlPrototype,
  htmlScope,
  htmlAscii,
  htmlUnicode,
];

// массив страниц со страницы Event Loop
const eventloopLinks = [htmlEventloopTask];


// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#theory');

  // собрать все ссылки в aside menu
  const asideItems = document.querySelectorAll('.aside a');

  // если ссылки в aside menu есть, то по клику показывать нужную страницу
  if (asideItems) {
    asideItems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentContent) {
          currentContent.innerHTML = aside[index];
        }
          switch (aside[index]) {
          case htmlEventloop:
            pageLinkEventloop();
            break;
        }
      });
    })
  }
}

// Функция pageLinkEventloop вешает обработчик клика на ссылки со страницы Event Loop
function pageLinkEventloop() {
  const currentContent = document.querySelector('#theory');
  // собрать все ссылки на странице Event Loop
  const linksEventloop = document.querySelectorAll('.eventloop-links');

  // если ссылки на странице Event Loop есть, то по клику показывать нужную страницу
  if (linksEventloop) {
    linksEventloop.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentContent) {
            currentContent.innerHTML = eventloopLinks[index];
          }
          backToEventloop();
        });
    })
  }
}

function backToEventloop() {
  const currentContent = document.querySelector('#theory');
  const linkToEventloop = document.getElementById('link-to-eventloop');
  if (linkToEventloop) {
    linkToEventloop.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentContent) {
        currentContent.innerHTML = htmlEventloop;
      }
      pageLinkEventloop();
    });
  }
}
