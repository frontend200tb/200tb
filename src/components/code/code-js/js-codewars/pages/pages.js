/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlCodewars01 from './elem-codewars-01.html';
import htmlCodewars02 from './elem-codewars-02.html';
import htmlCodewars03 from './elem-codewars-03.html';
import htmlCodewars from './elem-codewars.html';

// массив страниц из aside menu
const aside = [
  htmlCodewars01,
  htmlCodewars02,
  htmlCodewars03,
  htmlCodewars,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#codewars');

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
