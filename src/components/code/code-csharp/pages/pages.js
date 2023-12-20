import htmlCodeCsharp from './elem-code-csharp.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#code');

  const asideCsharp = document.getElementById('code-c');
  if (asideCsharp) {
    asideCsharp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlCodeCsharp;
    });
  }

}
