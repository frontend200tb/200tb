/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlBom from './elem-bom.html';
import htmlFetch from './elem-fetch.html';
import htmlHistory from './elem-history.html';
import htmlLocation from './elem-location.html';
import htmlStorage from './elem-storage.html';
import htmlXhr from './elem-xhr.html';

// массив страниц из aside menu
const aside = [
  htmlBom,
  htmlFetch,
  htmlHistory,
  htmlLocation,
  htmlStorage,
  htmlXhr,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#webapi');

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
