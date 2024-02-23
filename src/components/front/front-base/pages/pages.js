/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlStructure from './elem-base-structure.html';
import htmlAlgorithm from './elem-base-algorithm.html';
import htmlPrinciple from './elem-base-principle.html';
import htmlPattern from './elem-base-pattern.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asideBase = [htmlStructure, htmlAlgorithm, htmlPrinciple, htmlPattern];  
  const currentContent = document.querySelector('#base');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asideBase[index];
    });
  }
}
