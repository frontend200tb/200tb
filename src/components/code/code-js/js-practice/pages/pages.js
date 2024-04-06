/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlTask from './elem-task.html';

// массив страниц из aside menu
const aside = [
  htmlTask,
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
        currentContent.innerHTML = aside[index];
      });
    })
  }
}
