import htmlCodePascal from './elem-code-pascal.html';
import htmlCodeTypes from './elem-code-types.html';
import htmlCodeLessons from './elem-code-lessons.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');


  const asidePascal = document.getElementById('code-pascal');
  if (asidePascal) {
    asidePascal.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodePascal;
    });
  }

  const asideTypes = document.getElementById('code-types');
  if (asideTypes) {
    asideTypes.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeTypes;
    });
  }

  const asideLessons = document.getElementById('code-lessons');
  if (asideLessons) {
    asideLessons.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeLessons;
    });
  }
}
