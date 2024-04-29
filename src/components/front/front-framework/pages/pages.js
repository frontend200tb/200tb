/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlAngular from './elem-angular.html';
import htmlReact from './elem-react.html';
import htmlVue from './elem-vue.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlAngular,
    htmlReact,
    htmlVue,
  ];
  
  const currentContent = document.querySelector('#framework');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentContent) {
        currentContent.innerHTML = aside[index];
      }
  });
  }
}
