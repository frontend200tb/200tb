import htmlCodeCss from './elem-code-css.html';
import htmlCodeCssSel from './elem-code-css-sel.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideCss = document.getElementById('code-css');
  if (asideCss) {
    asideCss.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCss;
      cssLinks();
    });
  }

}

function cssLinks() {
  const currentContent = document.querySelector('#code');

  const cssSel = document.getElementById('css-sel');
  if (cssSel) {
    cssSel.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCssSel;
      backToCss();
    });
  }
}

function backToCss() {
  const currentContent = document.querySelector('#code');

  const linkToCss = document.getElementById('back-to-css');
  if (linkToCss) {
    linkToCss.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCss;
      cssLinks();
    });
  }
}
