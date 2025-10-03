/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages} from './data-pages';
import in1     from '../pages/elem-sp1';
import in2     from '../pages/elem-sp2';

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];

        // подключаем на каждую страницу свои задачи
        switch (index) {
          case 0: in1(); break;
          case 1: in2(); break;
        }
      }
    });
  })
}
