/****************
Скрипт из файла gustokashin.js
Объект gustokashin содержит страницу alg-gustokashin
Функция showGustokashin показывает страницу gustokashin
*****************/
import './js/element-gustokashin';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект gustokashin
const gustokashin = {};

// 2. В объекте gustokashin создаем свойство aside
gustokashin.aside = createAside();

// 3. В объекте gustokashin создаем свойство main
gustokashin.main = createMain();

// 4. Экспортируем функцию showGustokashin()
export default function showGustokashin() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(gustokashin.aside);
    mainAside.append(gustokashin.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}