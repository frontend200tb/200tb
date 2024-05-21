/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlTask from './elem-task.html';
import htmlEventloop from './elem-eventloop.html';
import htmlString from './elem-string.html';
import htmlObject from './elem-object.html';
import htmlProto from './elem-proto.html';
import htmlPromise from './elem-promise.html';
import htmlFetch from './elem-fetch.html';

// массив страниц из aside menu
const aside = [
  htmlTask,
  htmlEventloop,
  htmlString,
  htmlObject,
  htmlProto,
  htmlPromise,
  htmlFetch,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#practice');

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
        });
    })
  }
}
