import htmlCodeJs from './elem-code-js.html';
import htmlCodeString from './elem-code-string.html';
import htmlCodeArray from './elem-code-array.html';
import htmlCodeAscii from './elem-code-ascii.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideJs = document.getElementById('code-javascript');
  if (asideJs) {
    asideJs.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeJs;
    });
  }

  const asideString = document.getElementById('code-string');
  if (asideString) {
    asideString.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeString;
    });
  }

  const asideArray = document.getElementById('code-array');
  if (asideArray) {
    asideArray.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeArray;
    });
  }

  const asideAscii = document.getElementById('code-ascii');
  if (asideAscii) {
    asideAscii.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeAscii;
    });
  }
}
