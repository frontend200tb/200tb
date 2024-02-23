/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCodeCsharp from './elem-code-csharp.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asideCsharp = [htmlCodeCsharp];  
  const currentContent = document.querySelector('#code');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asideCsharp[index];
    });
  }
}
