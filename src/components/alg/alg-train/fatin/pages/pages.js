/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlFatin01 from './elem-fatin-01.html';
import htmlFatin02 from './elem-fatin-02.html';
import htmlFatin03 from './elem-fatin-03.html';
import htmlFatin04 from './elem-fatin-04.html';
import htmlFatin05 from './elem-fatin-05.html';
import htmlFatin06 from './elem-fatin-06.html';
import htmlFatin07 from './elem-fatin-07.html';
import htmlFatin08 from './elem-fatin-08.html';
import htmlFatin09 from './elem-fatin-09.html';
import htmlFatin10 from './elem-fatin-10.html';
import htmlFatin11 from './elem-fatin-11.html';
import htmlFatin12 from './elem-fatin-12.html';
import htmlFatin13 from './elem-fatin-13.html';
import htmlFatin14 from './elem-fatin-14.html';

// массив страниц из aside menu
const aside = [
  htmlFatin01,
  htmlFatin02,
  htmlFatin03,
  htmlFatin04,
  htmlFatin05,
  htmlFatin06,
  htmlFatin07,
  htmlFatin08,
  htmlFatin09,
  htmlFatin10,
  htmlFatin11,
  htmlFatin12,
  htmlFatin13,
  htmlFatin14,
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
