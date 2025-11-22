/** *******************
Скрипт из файла mifi.js
Объект mifi содержит страницу alg-mifi
Функция showMifi показывает страницу mifi
******************** */
import './js/element-mifi';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект mifi
const mifi = {};

// 2. В объекте mifi создаем свойство aside
mifi.aside = createAside();

// 3. В объекте mifi создаем свойство main
mifi.main = createMain();

// 4. Экспортируем функцию showMifi()
export default function showMifi() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(mifi.aside);
    mainAside.append(mifi.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
