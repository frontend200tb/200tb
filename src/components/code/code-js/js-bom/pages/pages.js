/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlBom from './elem-bom.html';
import htmlWindow from './elem-window.html';
import htmlDocument from './elem-document.html';
import htmlConsole from './elem-console.html';
import htmlFetch from './elem-fetch.html';
import htmlFileReader from './elem-filereader.html';
import htmlHistory from './elem-history.html';
import htmlJson from './elem-json.html';
import htmlLocation from './elem-location.html';
import htmlNavigator from './elem-navigator.html';
import htmlScreen from './elem-screen.html';
import htmlStorage from './elem-storage.html';
import htmlWorker from './elem-worker.html';
import htmlXhr from './elem-xhr.html';

// массив страниц из aside menu
const aside = [
  htmlBom,
  htmlWindow,
  htmlDocument,
  htmlConsole,
  htmlFetch,
  htmlFileReader,
  htmlHistory,
  htmlJson,
  htmlLocation,
  htmlNavigator,
  htmlScreen,
  htmlStorage,
  htmlWorker,
  htmlXhr,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#bom');

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
