/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlNumber from './elem-number.html';
import htmlString from './elem-string.html';
import htmlBoolean from './elem-boolean.html';
import htmlNull from './elem-null.html';
import htmlUndefined from './elem-undefined.html';
import htmlBigint from './elem-bigint.html';
import htmlSymbol from './elem-symbol.html';
import htmlObject from './elem-object.html';

// массив страниц из aside menu
const aside = [
  htmlNumber,
  htmlString,
  htmlBoolean,
  htmlNull,
  htmlUndefined,
  htmlBigint,
  htmlSymbol,
  htmlObject,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#datatypes');

  // собрать все ссылки в aside menu
  const asideItems = document.querySelectorAll('.aside a');

  // если ссылки в aside menu есть, то по клику показывать нужную страницу
  if (asideItems) {
    asideItems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        currentContent.innerHTML = aside[index];
      });
    })
  }
}
