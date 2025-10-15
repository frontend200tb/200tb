/****************
Скрипт из файла ta4.js
Объект ta4 содержит страницу alg-ta4
Функция showTa4 показывает страницу ta4
*****************/
import './js/element-ta4';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta4
const ta4 = {};

// 2. В объекте ta4 создаем свойство aside
ta4.aside = createAside();

// 3. В объекте ta4 создаем свойство main
ta4.main = createMain();

// 4. Экспортируем функцию showTa4()
export default function showTa4() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta4.aside);
    mainAside.append(ta4.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}