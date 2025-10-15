/****************
Скрипт из файла ta8.js
Объект ta8 содержит страницу alg-ta8
Функция showTa8 показывает страницу ta8
*****************/
import './js/element-ta8';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta8
const ta8 = {};

// 2. В объекте ta8 создаем свойство aside
ta8.aside = createAside();

// 3. В объекте ta8 создаем свойство main
ta8.main = createMain();

// 4. Экспортируем функцию showTa8()
export default function showTa8() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta8.aside);
    mainAside.append(ta8.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}