/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlCorejs1 from './elem-corejs1.html';
import htmlCorejs2 from './elem-corejs2.html';

// массив страниц из aside menu
const aside = [
  htmlCorejs1,
  htmlCorejs2,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#interview');

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
