/****************
Скрипт из файла ta6.js
Объект ta6 содержит страницу alg-ta6
Функция showTa6 показывает страницу ta6
*****************/
import './js/element-ta6';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta6
const ta6 = {};

// 2. В объекте ta6 создаем свойство aside
ta6.aside = createAside();

// 3. В объекте ta6 создаем свойство main
ta6.main = createMain();

// 4. Экспортируем функцию showTa6()
export default function showTa6() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta6.aside);
    mainAside.append(ta6.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}