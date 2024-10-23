/******************
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlPattern from './elem-pattern.html';
import htmlPrinciple from './elem-principle.html';
import htmlOop from './elem-oop.html';
import htmlFp from './elem-fp.html';
import htmlInfo from './elem-info.html';

const aside = [
  htmlPattern,
  htmlPrinciple,
  htmlOop,
  htmlFp,
  htmlInfo,
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
