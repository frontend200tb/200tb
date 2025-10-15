/****************
Скрипт из файла ta1.js
Объект ta1 содержит страницу alg-ta1
Функция showTa1 показывает страницу ta1
*****************/
import './js/element-ta1';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta1
const ta1 = {};

// 2. В объекте ta1 создаем свойство aside
ta1.aside = createAside();

// 3. В объекте ta1 создаем свойство main
ta1.main = createMain();

// 4. Экспортируем функцию showTa1()
export default function showTa1() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta1.aside);
    mainAside.append(ta1.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}