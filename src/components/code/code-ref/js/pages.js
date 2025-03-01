/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages} from './data-pages';

export default function pageLink(asideItems, currentContent) {

  // собрать все ссылки в aside menu
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];
        switch (index) {
          case 0: // htmlUnicode
          copyToClipboard(); // функция копирования в буфер обмена
          break;
        }
      }
    });
  })
}

// Функция copy-to-clipboard копирует текст в буфер обмена
function copyToClipboard() {
  const copyBtns = document.querySelectorAll(".copy-to-clipboard");
  for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", fcopy);
    }
}

function fcopy(e) {
  const text = e.target.innerText;
  navigator.clipboard.writeText(text);
  console.log(text);
}


/*
// проверка что есть объект navigator
if (navigator.clipboard) {
  console.log('Clipboard');
} else {
  console.log('No clipboard');
}
*/