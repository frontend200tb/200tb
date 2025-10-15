/****************
Скрипт из файла ta2.js
Объект ta2 содержит страницу alg-ta2
Функция showTa2 показывает страницу ta2
*****************/
import './js/element-ta2';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta2
const ta2 = {};

// 2. В объекте ta2 создаем свойство aside
ta2.aside = createAside();

// 3. В объекте ta2 создаем свойство main
ta2.main = createMain();

// 4. Экспортируем функцию showTa2()
export default function showTa2() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta2.aside);
    mainAside.append(ta2.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}