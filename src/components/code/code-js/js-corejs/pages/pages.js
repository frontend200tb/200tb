/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlGlobalthis from './elem-globalthis.html';
import htmlArray from './elem-array.html';
import htmlDate from './elem-date.html';
import htmlError from './elem-error.html';
import htmlMap from './elem-map.html';
import htmlMath from './elem-math.html';
import htmlNumber from './elem-number.html';
import htmlObject from './elem-object.html';
import htmlPromise from './elem-promise.html';
import htmlRegexp from './elem-regexp.html';
import htmlSet from './elem-set.html';
import htmlString from './elem-string.html';
import htmlSymbol from './elem-symbol.html';

// Promise
import htmlPromiseTask from './elem-promise-task.html';

// массив страниц из aside menu
const aside = [
  htmlGlobalthis,
  htmlArray,
  htmlDate,
  htmlError,
  htmlMap,
  htmlMath,
  htmlNumber,
  htmlObject,
  htmlPromise,
  htmlRegexp,
  htmlSet,
  htmlString,
  htmlSymbol,
];

// массив страниц со страницы Promise
const promiseLinks = [htmlPromiseTask];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#corejs');

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
          switch (aside[index]) {
          case htmlPromise:
            pageLinkPromise();
            break;
        }
      });
    })
  }
}

// Функция pageLinkPromise вешает обработчик клика на ссылки со страницы Promise
function pageLinkPromise() {
  const currentContent = document.querySelector('#corejs');
  // собрать все ссылки на странице Promise
  const linksPromise = document.querySelectorAll('.promise-links');

  // если ссылки на странице Promise есть, то по клику показывать нужную страницу
  if (linksPromise) {
    linksPromise.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentContent) {
            currentContent.innerHTML = promiseLinks[index];
          }
          backToPromise();
        });
    })
  }
}

function backToPromise() {
  const currentContent = document.querySelector('#corejs');
  const linkToPromise = document.getElementById('link-to-promise');
  if (linkToPromise) {
    linkToPromise.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentContent) {
        currentContent.innerHTML = htmlPromise;
      }
      pageLinkPromise();
    });
  }
}
