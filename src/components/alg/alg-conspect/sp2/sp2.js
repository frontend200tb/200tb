/****************
Скрипт из файла sp2.js
Объект sp2 содержит страницу sp2
Функция showSp2 показывает страницу sp2
*****************/
import './js/element-sp2';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект sp2
const sp2 = {};

// 2. В объекте sp2 создаем свойство aside
sp2.aside = createAside();

// 3. В объекте sp2 создаем свойство main
sp2.main = createMain();

// 4. Экспортируем функцию showSp2()
export default function showSp2() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(sp2.aside);
    mainAside.append(sp2.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
