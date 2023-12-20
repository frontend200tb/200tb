import htmlCodeMarkdown from './elem-code-markdown.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideMarkdown = document.getElementById('code-markdown');
  if (asideMarkdown) {
    asideMarkdown.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeMarkdown;
    });
  }
}
