/******************
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlOnlineMain from './elem-online-main.html';
import htmlOnlineLayout from './elem-online-layout.html';
import htmlOnlineRoadmap from './elem-online-roadmap.html';
import htmlOnlineHosting from './elem-online-hosting.html';
import htmlOnlinePlayground from './elem-online-playground.html';

const aside = [
  htmlOnlineMain,
  htmlOnlineLayout,
  htmlOnlineRoadmap,
  htmlOnlineHosting,
  htmlOnlinePlayground,
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
