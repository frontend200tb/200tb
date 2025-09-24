/****************
Скрипт из файла all.js
Объект sch19 содержит страницу all
Функция showAll показывает страницу all
*****************/
import './js/element-all';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект all
const all = {};

// 2. В объекте all создаем свойство aside
all.aside = createAside();

// 3. В объекте all создаем свойство main
all.main = createMain();

// 4. Экспортируем функцию showAll()
export default function showAll() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(all.aside);
    mainAside.append(all.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
