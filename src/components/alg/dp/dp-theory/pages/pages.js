/******************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlHanoy from './elem-hanoy.html';
import htmlPizza from './elem-pizza.html';
import htmlFlaviy from './elem-flaviy.html';
import htmlFrog from './elem-frog.html';

const aside = [
  htmlHanoy,
  htmlPizza,
  htmlFlaviy,
  htmlFrog,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink(asideItems) {
  const currentContent = main;

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
