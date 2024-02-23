/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCodeMarkdown from './elem-code-markdown.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asideMarkdoun = [htmlCodeMarkdown];  
  const currentContent = document.querySelector('#code');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asideMarkdoun[index];
    });
  }
}
