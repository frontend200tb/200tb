/****************
Скрипт из файла ta7.js
Объект ta7 содержит страницу alg-ta7
Функция showTa7 показывает страницу ta7
*****************/
import './js/element-ta7';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta7
const ta7 = {};

// 2. В объекте ta7 создаем свойство aside
ta7.aside = createAside();

// 3. В объекте ta7 создаем свойство main
ta7.main = createMain();

// 4. Экспортируем функцию showTa7()
export default function showTa7() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta7.aside);
    mainAside.append(ta7.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}