/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCAbout from './elem-cabout.html';
import htmlCInstall from './elem-cinstall.html';
import htmlC from './elem-c.html';
import htmlCPractice from './elem-cpractice.html';


// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlCAbout,
    htmlCInstall,
    htmlC,
    htmlCPractice,
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
