/****************
Скрипт из файла mirea.js
Объект mirea содержит страницу mirea
Функция showMirea показывает страницу mirea
*****************/
import './js/element-mirea';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект mirea
const mirea = {};

// 2. В объекте mirea создаем свойство aside
mirea.aside = createAside();

// 3. В объекте mirea создаем свойство main
mirea.main = createMain();

// 4. Экспортируем функцию showMirea()
export default function showMirea() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(mirea.aside);
    mainAside.append(mirea.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
