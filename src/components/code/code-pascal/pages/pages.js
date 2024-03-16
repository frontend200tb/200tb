/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlPascal from './elem-pascal.html';
import htmlTypes from './elem-types.html';
import htmlLessons from './elem-lessons.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlPascal,
    htmlTypes,
    htmlLessons
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
