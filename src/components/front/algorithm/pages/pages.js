/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlAlgorithm from './elem-algorithm.html';
import htmlComplexity from './elem-complexity.html';
import htmlSort from './elem-sort.html';
import htmlSearch from './elem-search.html';
import htmlTrain1 from './elem-train1.html';
import htmlTrain2 from './elem-train2.html';
import htmlTrain3 from './elem-train3.html';
import htmlTrain4 from './elem-train4.html';
import htmlTrain5 from './elem-train5.html';
import htmlTask2019 from './elem-task2019.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlAlgorithm,
    htmlComplexity,
    htmlSort,
    htmlSearch,
    htmlTrain1,
    htmlTrain2,
    htmlTrain3,
    htmlTrain4,
    htmlTrain5,
    htmlTask2019,
  ];
  
  const currentContent = document.querySelector('#algorithm');
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
