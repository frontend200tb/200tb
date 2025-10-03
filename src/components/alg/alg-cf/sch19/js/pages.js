/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages} from './data-pages';
import in1     from '../pages/elem-sch1';
import in3     from '../pages/elem-sch3';
import in6     from '../pages/elem-sch6';

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];

        // подключаем на каждую страницу свои задачи
        switch (index) {
          case 0: in1(); break;
          case 2: in3(); break;
          case 5: in6(); break;
        }
      }
    });
  })
}
