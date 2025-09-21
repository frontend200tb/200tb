/****************
Скрипт из файла sch19.js
Объект sch19 содержит страницу sch19
Функция showSch19 показывает страницу sch19
*****************/
import './js/element-sch19';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект sch19
const sch19 = {};

// 2. В объекте sch19 создаем свойство aside
sch19.aside = createAside();

// 3. В объекте sch19 создаем свойство main
sch19.main = createMain();

// 4. Экспортируем функцию showSch19()
export default function showSch19() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(sch19.aside);
    mainAside.append(sch19.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
