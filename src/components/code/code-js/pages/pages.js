/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlJs from './elem-js.html';
import htmlNumber from './elem-number.html';
import htmlString from './elem-string.html';
import htmlNull from './elem-null.html';
import htmlUndefined from './elem-undefined.html';
import htmlObject from './elem-object.html';
import htmlArray from './elem-array.html';
import htmlDate from './elem-date.html';
import htmlHistory from './elem-history.html';
import htmlLocation from './elem-location.html';
import htmlMath from './elem-math.html';
import htmlPromise from './elem-promise.html';
import htmlPrototype from './elem-prototype.html';
import htmlRegexp from './elem-regexp.html';
import htmlStorage from './elem-storage.html';
import htmlXhr from './elem-xhr.html';
import htmlAscii from './elem-ascii.html';
import htmlUnicode from './elem-unicode.html';

// Promise
import htmlPromiseTask from './elem-promise-tasks.html';

// массив страниц из aside menu
const aside = [
  htmlJs,
  htmlNumber,
  htmlString,
  htmlNull,
  htmlUndefined,
  htmlObject,
  htmlArray,
  htmlDate,
  htmlHistory,
  htmlLocation,
  htmlMath,
  htmlPromise,
  htmlPrototype,
  htmlRegexp,
  htmlStorage,
  htmlXhr,
  htmlAscii,
  htmlUnicode
];

// массив страниц со страницы Promise
const promiseLinks = [htmlPromiseTask];


// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {  
  const currentContent = document.querySelector('#code');
  
  // собрать все ссылки в aside menu
  const asideItems = document.querySelectorAll('.aside a');

  // если ссылки в aside menu есть, то по клику показывать нужную страницу
  if (asideItems) {
    asideItems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        currentContent.innerHTML = aside[index];
        if (aside[index] === htmlPromise) {
          pageLinkPromise();
        }
      });
    })
  }
}

// Функция pageLinkPromise вешает обработчик клика на ссылки со страницы Promise
function pageLinkPromise() {
  const currentContent = document.querySelector('#code');
  // собрать все ссылки на странице Promise
  const linksPromise = document.querySelectorAll('.promise-links');

  // если ссылке на странице Promise есть, то по клику показывать нужную страницу
  if (linksPromise) {
    linksPromise.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
          e.preventDefault();
          currentContent.innerHTML = promiseLinks[index];
          backToPromise();
        });
    })
  }
}

function backToPromise() {
  const currentContent = document.querySelector('#code');
  const linkToPromise = document.getElementById('link-to-promise');
  if (linkToPromise) {
    linkToPromise.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlPromise;
      pageLinkPromise();
    });
  }
}
