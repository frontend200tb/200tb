/** **************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */

// Aside
import htmlHaq from './elem-haq.html';
import htmlArticles from './elem-articles.html';

// массив страниц из aside menu
const aside = [
  htmlHaq,
  htmlArticles,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {  
  const currentContent = document.querySelector('#articles');
  
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
