/** *******************
Скрипт из файла c-base.js
Объект cBase содержит страницу c-base
Функция showCBase показывает страницу c-base
******************** */
import './js/element-c-base';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cBase
const cBase = {};

// 2. В объекте cBase создаем свойство aside
cBase.aside = createAside();

// 3. В объекте cBase создаем свойство main
cBase.main = createMain();

// 4. Экспортируем функцию showCBase()
export default function showCBase() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cBase.aside);
    mainAside.append(cBase.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
