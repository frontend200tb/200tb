/** *******************
Скрипт из файла allcups.js
Объект allcups содержит страницу alg-allcups
Функция showAllcups показывает страницу allcups
******************** */
import './js/element-allcups';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект allcups
const allcups = {};

// 2. В объекте allcups создаем свойство aside
allcups.aside = createAside();

// 3. В объекте allcups создаем свойство main
allcups.main = createMain();

// 4. Экспортируем функцию showAllcups()
export default function showAllcups() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(allcups.aside);
    mainAside.append(allcups.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
