import contentOrder from '../../../../js/order';
import htmlCodeHtml from './elem-code-html.html';
import htmlCodeCss from './elem-code-css.html';
import htmlCodeCssSel from './elem-code-css-sel.html';
import htmlCodeJs from './elem-code-js.html';
import htmlCodeCsharp from './elem-code-csharp.html';
import htmlCodeMarkdown from './elem-code-markdown.html';
import htmlCodePug from './elem-code-pug.html';
import htmlCodeSass from './elem-code-sass.html';
import htmlCodeTailwind from './elem-code-tailwind.html';
import htmlCodePhp from './elem-code-php.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideHtml = document.getElementById('code-html');
  if (asideHtml) {
    asideHtml.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeHtml;
    });
  }

  const asideCss = document.getElementById('code-css');
  if (asideCss) {
    asideCss.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCss;
      cssLinks();
    });
  }

  const asideJs = document.getElementById('code-javascript');
  if (asideJs) {
    asideJs.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeJs;
      contentOrder();
    });
  }

  const asideCsharp = document.getElementById('code-c');
  if (asideCsharp) {
    asideCsharp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCsharp;
      contentOrder();
    });
  }

  const asidePug = document.getElementById('code-pug');
  if (asidePug) {
    asidePug.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodePug;
      contentOrder();
    });
  }

  const asideSass = document.getElementById('code-sass');
  if (asideSass) {
    asideSass.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeSass;
      contentOrder();
    });
  }

  const asideTailwind = document.getElementById('code-tailwind');
  if (asideTailwind) {
    asideTailwind.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeTailwind;
      contentOrder();
    });
  }

  const asidePhp = document.getElementById('code-php');
  if (asidePhp) {
    asidePhp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodePhp;
    });
  }

  const asideMarkdown = document.getElementById('code-markdown');
  if (asideMarkdown) {
    asideMarkdown.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeMarkdown;
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
