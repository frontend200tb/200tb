/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlLeetcode01 from './elem-leetcode-01.html';

// массив страниц из aside menu
const aside = [
  htmlLeetcode01,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#leetcode');

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
