/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages} from './data-pages';

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];
      }
    });
  })
}
