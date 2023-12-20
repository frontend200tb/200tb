import htmlCodeJs from './elem-code-js.html';
import htmlCodeString from './elem-code-string.html';

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
}
