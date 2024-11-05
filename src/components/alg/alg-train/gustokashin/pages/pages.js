/******************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlTrain1 from './elem-train1.html';
import htmlTrain2 from './elem-train2.html';
import htmlTrain3 from './elem-train3.html';
import htmlTrain4 from './elem-train4.html';
import htmlTrain5 from './elem-train5.html';

const aside = [
  htmlTrain1,
  htmlTrain2,
  htmlTrain3,
  htmlTrain4,
  htmlTrain5,
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
