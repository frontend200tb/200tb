/*
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import {pages} from './data-pages';

// Scope
import htmlScopeTask from './../pages/elem-scope-task.html';

// массив страниц со страницы Scope
const scopeLinks = [htmlScopeTask];

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];
        switch (index) {
          case 4: // htmlScope
            pageLinkScope();
            break;
        }
      }
    });
  })
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
            backToScope();
          }
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
        currentContent.innerHTML = pages[4]; // htmlScope
        pageLinkScope();
      }
    });
  }
}
