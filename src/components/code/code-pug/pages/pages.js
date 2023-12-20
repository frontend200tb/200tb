import htmlCodePug from './elem-code-pug.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asidePug = document.getElementById('code-pug');
  if (asidePug) {
    asidePug.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodePug;
    });
  }
}
