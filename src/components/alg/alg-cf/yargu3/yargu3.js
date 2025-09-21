/****************
Скрипт из файла yargu3.js
Объект yargu3 содержит страницу yargu3
Функция showYargu3 показывает страницу yargu3
*****************/
import './js/element-yargu3';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект yargu3
const yargu3 = {};

// 2. В объекте yargu3 создаем свойство aside
yargu3.aside = createAside();

// 3. В объекте yargu3 создаем свойство main
yargu3.main = createMain();

// 4. Экспортируем функцию showYargu3()
export default function showYargu3() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(yargu3.aside);
    mainAside.append(yargu3.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
