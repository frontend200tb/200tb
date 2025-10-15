/****************
Скрипт из файла ta3.js
Объект ta3 содержит страницу alg-ta3
Функция showTa3 показывает страницу ta3
*****************/
import './js/element-ta3';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta3
const ta3 = {};

// 2. В объекте ta3 создаем свойство aside
ta3.aside = createAside();

// 3. В объекте ta3 создаем свойство main
ta3.main = createMain();

// 4. Экспортируем функцию showTa3()
export default function showTa3() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta3.aside);
    mainAside.append(ta3.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}