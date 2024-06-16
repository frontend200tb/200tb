/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import showJsDatatypes from './js-datatypes/js-datatypes';
import showJsCorejs from './js-corejs/js-corejs';
import showJsBom from './js-bom/js-bom';
import showJsDom from './js-dom/js-dom';
import showJsTheory from './js-theory/js-theory';
import showJsPractice from './js-practice/js-practice';
import showJsInterview from './js-interview/js-interview';

export default function pageLink() {
  const currentContent = document.querySelector('#js');

  const navDatatypes = document.getElementById('js-1');
  if (navDatatypes) {
    navDatatypes.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-datatypes></js-datatypes>';
      showJsDatatypes();
    });
  }

  const navCorejs = document.getElementById('js-2');
  if (navCorejs) {
    navCorejs.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-corejs></js-corejs>';
      showJsCorejs();
    });
  }

  const navBom = document.getElementById('js-3');
  if (navBom) {
    navBom.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-bom></js-bom>';
      showJsBom();
    });
  }

  const navDom = document.getElementById('js-4');
  if (navDom) {
    navDom.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-dom></js-dom>';
      showJsDom();
    });
  }

  const navTheory = document.getElementById('js-5');
  if (navTheory) {
    navTheory.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-theory></js-theory>';
      showJsTheory();
    });
  }

  const navPractice = document.getElementById('js-6');
  if (navPractice) {
    navPractice.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-practice></js-practice>';
      showJsPractice();
    });
  }

  const navInterview = document.getElementById('js-7');
  if (navInterview) {
    navInterview.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-interview></js-interview>';
      showJsInterview();
    });
  }

}
