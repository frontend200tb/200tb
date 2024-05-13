/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCss from './elem-css.html';
import htmlCssSel from './elem-css-sel.html';
import htmlCssProp from './elem-css-prop.html';
import htmlCssPx from './elem-css-px.html';
import htmlCssColors from './elem-css-colors.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlCss,
    htmlCssSel,
    htmlCssProp,
    htmlCssPx,
    htmlCssColors,
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
