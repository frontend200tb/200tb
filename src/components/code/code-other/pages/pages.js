/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCsharp from './elem-csharp.html';
import htmlMarkdown from './elem-markdown.html';
import htmlPhp from './elem-php.html';
import htmlPug from './elem-pug.html';
import htmlSass from './elem-sass.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlCsharp, htmlMarkdown, htmlPhp, htmlPug, htmlSass
  ];
  
  const currentContent = document.querySelector('#code');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = aside[index];
    });
  }
}
