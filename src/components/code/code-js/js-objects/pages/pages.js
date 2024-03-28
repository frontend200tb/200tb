/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlDate from './elem-date.html';
import htmlMath from './elem-math.html';
import htmlRegexp from './elem-regexp.html';

// массив страниц из aside menu
const aside = [
  htmlDate,
  htmlMath,
  htmlRegexp,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#objects');

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
