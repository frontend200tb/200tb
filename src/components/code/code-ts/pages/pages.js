import htmlCodeTs from './elem-code-ts.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideTs = document.getElementById('code-typescript');
  if (asideTs) {
    asideTs.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeTs;
    });
  }
}
