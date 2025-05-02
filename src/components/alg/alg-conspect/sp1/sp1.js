/****************
Скрипт из файла sp1.js
Объект sp1 содержит страницу sp1
Функция showSp1 показывает страницу sp1
*****************/
import './js/element-sp1';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект sp1
const sp1 = {};

// 2. В объекте sp1 создаем свойство aside
sp1.aside = createAside();

// 3. В объекте sp создаем свойство main
sp1.main = createMain();

// 4. Экспортируем функцию showSp1()
export default function showSp1() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(sp1.aside);
    mainAside.append(sp1.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
