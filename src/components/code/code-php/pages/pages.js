import htmlCodePhp from './elem-code-php.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');


  const asidePhp = document.getElementById('code-php');
  if (asidePhp) {
    asidePhp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodePhp;
    });
  }
}
