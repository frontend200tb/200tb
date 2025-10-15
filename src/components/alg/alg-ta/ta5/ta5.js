/****************
Скрипт из файла ta5.js
Объект ta5 содержит страницу alg-ta5
Функция showTa5 показывает страницу ta5
*****************/
import './js/element-ta5';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ta5
const ta5 = {};

// 2. В объекте ta5 создаем свойство aside
ta5.aside = createAside();

// 3. В объекте ta5 создаем свойство main
ta5.main = createMain();

// 4. Экспортируем функцию showTa5()
export default function showTa5() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ta5.aside);
    mainAside.append(ta5.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}