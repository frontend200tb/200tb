/** *******************
Скрипт из файла code-ts.js
Объект codeTs содержит страницу code-ts
Функция showCodeTs показывает страницу code-ts
******************** */
import './js/element-code-ts';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeTs
const codeTs = {};

// 2. В объекте codeTs создаем свойство aside
codeTs.aside = createAside();

// 3. В объекте codeTs создаем свойство main
codeTs.main = createMain();

// 4. Экспортируем функцию showCodeTs()
export default function showCodeTs() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeTs.aside);
    mainAside.append(codeTs.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
