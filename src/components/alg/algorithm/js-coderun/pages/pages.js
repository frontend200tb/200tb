/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
// Aside
import htmlCoderun01 from './elem-coderun-01.html';
import htmlYandex01 from './elem-yandex-01.html';
import htmlContest01 from './elem-contest-01.html';
import htmlContest2019 from './elem-ya-contest2019.html';
import htmlContest2024 from './elem-ya-contest2024.html';

// массив страниц из aside menu
const aside = [
  htmlCoderun01,
  htmlYandex01,
  htmlContest01,
  htmlContest2019,
  htmlContest2024,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#coderun');

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
