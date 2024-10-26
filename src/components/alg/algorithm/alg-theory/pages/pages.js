/******************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlAlg from './elem-alg.html';
import htmlStruct from './elem-structure.html';
import htmlComplexity from './elem-complexity.html';
import htmlSort from './elem-sort.html';
import htmlSearch from './elem-search.html';

const aside = [
  htmlAlg,
  htmlStruct,
  htmlComplexity,
  htmlSort,
  htmlSearch,
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
