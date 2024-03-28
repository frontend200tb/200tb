/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import showJsDatatypes from './js-datatypes/js-datatypes';
import showJsObjects from './js-objects/js-objects';
import showJsWebApi from './js-webapi/js-webapi';
import showJsTheory from './js-theory/js-theory';
import showJsPractice from './js-practice/js-practice';
import showJsCodewars from './js-codewars/js-codewars';

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

  const navObjects = document.getElementById('js-2');
  if (navObjects) {
    navObjects.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-objects></js-objects>';
      showJsObjects();
    });
  }

  const navWebApi = document.getElementById('js-3');
  if (navWebApi) {
    navWebApi.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-webapi></js-webapi>';
      showJsWebApi();
    });
  }

  const navTheory = document.getElementById('js-4');
  if (navTheory) {
    navTheory.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-theory></js-theory>';
      showJsTheory();
    });
  }

  const navPractice = document.getElementById('js-5');
  if (navPractice) {
    navPractice.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-practice></js-practice>';
      showJsPractice();
    });
  }

  const navCodewars = document.getElementById('js-6');
  if (navCodewars) {
    navCodewars.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<js-codewars></js-codewars>';
      showJsCodewars();
    });
  }

}
