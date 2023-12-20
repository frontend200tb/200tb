import htmlCodeSass from './elem-code-sass.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideSass = document.getElementById('code-sass');
  if (asideSass) {
    asideSass.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeSass;
    });
  }
}
