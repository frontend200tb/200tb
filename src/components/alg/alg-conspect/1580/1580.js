/** *******************
Скрипт из файла 1580.js
Объект s1580 содержит страницу alg-1580
Функция show1580 показывает страницу 1580
******************** */
import './js/element-1580';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект s1580
const s1580 = {};

// 2. В объекте s1580 создаем свойство aside
s1580.aside = createAside();

// 3. В объекте s1580 создаем свойство main
s1580.main = createMain();

// 4. Экспортируем функцию show1580()
export default function show1580() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(s1580.aside);
    mainAside.append(s1580.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
