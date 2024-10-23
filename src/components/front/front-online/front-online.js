/*****************
Скрипт из файла front-online.js
Функция showFrontOnline показывает страницу front-online
******************/
import './js/element-front-online';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontNode
const frontOnline = {};

// 2. В объекте frontNode создаем свойство aside
frontOnline.aside = createAside();

// 3. В объекте frontNode создаем свойство main
frontOnline.main = createMain();

// 4. Экспортируем функцию showFrontNode()
export default function showFrontOnline() {
  const mainAside = document.querySelector('.main__aside');

  mainAside.innerHTML = '';
  mainAside.append(frontOnline.aside);
  mainAside.append(frontOnline.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
}