/****************
Скрипт из файла yargu2.js
Объект yargu2 содержит страницу yargu2
Функция showYargu2 показывает страницу yargu2
*****************/
import './js/element-yargu2';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект yargu2
const yargu2 = {};

// 2. В объекте yargu2 создаем свойство aside
yargu2.aside = createAside();

// 3. В объекте yargu2 создаем свойство main
yargu2.main = createMain();

// 4. Экспортируем функцию showYargu2()
export default function showYargu2() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(yargu2.aside);
    mainAside.append(yargu2.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
