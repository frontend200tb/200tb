/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages} from './data-pages';

// Promise
import htmlPromiseTask from './../pages/elem-promise-task.html';

// массив страниц со страницы Promise
const promiseLinks = [htmlPromiseTask];

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];
        switch (index) {
          case 8: // htmlPromise
            pageLinkPromise();
            break;
        }
      }
    });
  })
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
            backToPromise();
          }
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
        currentContent.innerHTML = pages[8]; // htmlPromise
        pageLinkPromise();
      }
    });
  }
}
