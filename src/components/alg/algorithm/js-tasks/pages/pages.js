/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlTask01 from './elem-task-01.html';
import htmlTask02 from './elem-task-02.html';
import htmlTask03 from './elem-task-03.html';
import htmlTask04 from './elem-task-04.html';

// массив страниц из aside menu
const aside = [
  htmlTask01,
  htmlTask02,
  htmlTask03,
  htmlTask04,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#tasks');

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
