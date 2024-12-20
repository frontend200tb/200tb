/** *******************
Скрипт из файла codewars.js
Объект codewars содержит страницу alg-codewars
Функция showCodewars показывает страницу codewars
******************** */
import './js/element-codewars';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codewars
const codewars = {};

// 2. В объекте codewars создаем свойство aside
codewars.aside = createAside();

// 3. В объекте codewars создаем свойство main
codewars.main = createMain();

// 4. Экспортируем функцию showCodewars()
export default function showCodewars() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codewars.aside);
    mainAside.append(codewars.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
