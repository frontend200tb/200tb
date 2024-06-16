/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlJs from './elem-js.html';
import htmlEventloop from './elem-eventloop.html';
import htmlPrototype from './elem-prototype.html';
import htmlScope from './elem-scope.html';
import htmlPriority from './elem-priority.html';
import htmlKeywords from './elem-keywords.html';
import htmlGenerator from './elem-generator.html';
import htmlAscii from './elem-ascii.html';
import htmlUnicode from './elem-unicode.html';

// Scope
import htmlScopeTask from './elem-scope-task.html';

// массив страниц из aside menu
const aside = [
  htmlJs,
  htmlEventloop,
  htmlPrototype,
  htmlScope,
  htmlPriority,
  htmlKeywords,
  htmlGenerator,
  htmlAscii,
  htmlUnicode,
];

// массив страниц со страницы Scope
const scopeLinks = [htmlScopeTask];


// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#theory');

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
          case htmlScope:
            pageLinkScope();
            break;
        }
      });
    })
  }
}


// Функция pageLinkScope вешает обработчик клика на ссылки со страницы Scope
function pageLinkScope() {
  const currentContent = document.querySelector('#theory');
  // собрать все ссылки на странице Scope
  const linksScope = document.querySelectorAll('.scope-links');

  // если ссылки на странице Scope есть, то по клику показывать нужную страницу
  if (linksScope) {
    linksScope.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentContent) {
            currentContent.innerHTML = scopeLinks[index];
          }
          backToScope();
        });
    })
  }
}

function backToScope() {
  const currentContent = document.querySelector('#theory');
  const linkToScope = document.getElementById('link-to-scope');
  if (linkToScope) {
    linkToScope.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentContent) {
        currentContent.innerHTML = htmlScope;
      }
      pageLinkScope();
    });
  }
}
