/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlStructure from './elem-structure.html';
import htmlPrinciple from './elem-principle.html';
import htmlPattern from './elem-pattern.html';
import htmlOop from './elem-oop.html';
import htmlFp from './elem-fp.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlStructure,
    htmlPrinciple,
    htmlPattern,
    htmlOop,
    htmlFp
  ];
  
  const currentContent = document.querySelector('#base');
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
