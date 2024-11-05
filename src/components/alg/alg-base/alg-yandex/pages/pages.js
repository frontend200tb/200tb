/******************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlYaWeOffer from './elem-ya-we-offer.html';
import htmlYaKurs1 from './elem-ya-alg-kurs-free.html';
import htmlYaKurs2 from './elem-ya-alg-kurs-pay.html';
import htmlYandex01 from './elem-yandex-01.html';
import htmlContest01 from './elem-contest-01.html';
import htmlContest2019 from './elem-ya-contest2019.html';
import htmlContest2024 from './elem-ya-contest2024.html';

const aside = [
  htmlYaWeOffer,
  htmlYaKurs1,
  htmlYaKurs2,
  htmlYandex01,
  htmlContest01,
  htmlContest2019,
  htmlContest2024,
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
