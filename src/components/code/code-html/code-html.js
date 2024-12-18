/************************
Скрипт из файла code-html.js
Объект codeHtml содержит страницу code-html
Функция showCodeHtml показывает страницу code-html
************************/
import './scss/table.scss';
import './js/element-code-html';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeHtml
const codeHtml = {};

// 2. В объекте codeHtml создаем свойство aside
codeHtml.aside = createAside();

// 3. В объекте codeHtml создаем свойство main
codeHtml.main = createMain();

// 4. Экспортируем функцию showCodeHtml()
export default function showCodeHtml() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeHtml.aside);
    mainAside.append(codeHtml.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
