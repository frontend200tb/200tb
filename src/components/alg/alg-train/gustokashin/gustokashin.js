/****************
Скрипт из файла gustokashin.js
Функция showGustokashin показывает страницу gustokashin
*****************/
import './js/element-gustokashin';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект gustokashin
const gustokashin = {};

// 2. В объекте gustokashin создаем свойство aside
gustokashin.aside = aside;

// 3. В объекте gustokashin создаем свойство main
gustokashin.main = main;

// 4. Экспортируем функцию showGustokashin()
export default function showGustokashin() {
  const gustokashinElement = document.querySelector('.alg-gustokashin');
  const mainAside = gustokashinElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(gustokashin.aside);
  mainAside.append(gustokashin.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  gustokashin.aside.firstElementChild.dispatchEvent(eventClick);
}
