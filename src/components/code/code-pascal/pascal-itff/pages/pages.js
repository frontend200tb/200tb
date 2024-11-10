/******************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlItff from './elem-itff.html';
import htmlLes0 from './elem-les0.html';
import htmlLes1 from './elem-les1.html';
import htmlLes2 from './elem-les2.html';
import htmlLes3 from './elem-les3.html';
import htmlLes4 from './elem-les4.html';
import htmlLes5 from './elem-les5.html';
import htmlLes6 from './elem-les6.html';

const aside = [
  htmlItff,
  htmlLes0,
  htmlLes1,
  htmlLes2,
  htmlLes3,
  htmlLes4,
  htmlLes5,
  htmlLes6,
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
