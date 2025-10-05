/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages}   from './data-pages';
import in1       from '../pages/elem-1-Round1';
import in2       from '../pages/elem-2-Round2';
import in3       from '../pages/elem-3-Round3';
import in4       from '../pages/elem-4-Round4';
import in5       from '../pages/elem-5-Round5';
import in6       from '../pages/elem-6-Round6';
import in7       from '../pages/elem-7-Round7';
import in8       from '../pages/elem-8-Round8';
import in38      from '../pages/elem-38-sio1';
import in134     from '../pages/elem-134-TRound3';
import in230     from '../pages/elem-230-Round142';
import in313     from '../pages/elem-313-Round186';

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
          case 2: in3(); break;
          case 3: in4(); break;
          case 4: in5(); break;
          case 5: in6(); break;
          case 6: in7(); break;
          case 7: in8(); break;
          case 13: in38(); break;
          case 32: in134(); break;
          case 38: in230(); break;
          case 39: in313(); break;
        }
      }
    });
  })
}
