/****************
Скрипт из файла yargu1.js
Объект yargu1 содержит страницу yargu1
Функция showYargu1 показывает страницу yargu1
*****************/
import './js/element-yargu1';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект yargu1
const yargu1 = {};

// 2. В объекте yargu1 создаем свойство aside
yargu1.aside = createAside();

// 3. В объекте sp создаем свойство main
yargu1.main = createMain();

// 4. Экспортируем функцию showYargu1()
export default function showYargu1() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(yargu1.aside);
    mainAside.append(yargu1.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
