/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCodePascal from './elem-code-pascal.html';
import htmlCodeTypes from './elem-code-types.html';
import htmlCodeLessons from './elem-code-lessons.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asidePascal = [htmlCodePascal, htmlCodeTypes, htmlCodeLessons];  
  const currentContent = document.querySelector('#code');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asidePascal[index];
    });
  }
}
