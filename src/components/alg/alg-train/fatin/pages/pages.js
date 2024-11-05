/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlFatin01 from './elem-fatin-01.html';
import htmlFatin02 from './elem-fatin-02.html';
import htmlFatin03 from './elem-fatin-03.html';
import htmlFatin04 from './elem-fatin-04.html';

// массив страниц из aside menu
const aside = [
  htmlFatin01,
  htmlFatin02,
  htmlFatin03,
  htmlFatin04,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#fatin');

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
