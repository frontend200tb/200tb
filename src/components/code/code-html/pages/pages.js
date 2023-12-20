import htmlCodeHtml from './elem-code-html.html';

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
}
