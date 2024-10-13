/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlAssembler from './elem-assembler.html';
import htmlLinux from './elem-linux.html';
import htmlC from './elem-c.html';
import htmlCPractice from './elem-cpractice.html';
import htmlCpp from './elem-cpp.html';
import htmlCsharp from './elem-csharp.html';
import htmlMarkdown from './elem-markdown.html';
import htmlPhp from './elem-php.html';
import htmlPug from './elem-pug.html';
import htmlPython from './elem-python.html';
import htmlSass from './elem-sass.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlAssembler,
    htmlLinux,
    htmlC,
    htmlCPractice,
    htmlCpp,
    htmlCsharp,
    htmlMarkdown,
    htmlPhp,
    htmlPug,
    htmlPython,
    htmlSass
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
