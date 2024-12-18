/************************
Скрипт из файла code-css.js
Объект codeCss содержит страницу code-css
Функция showCodeCss показывает страницу code-css
************************/
import './js/element-code-css';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeCss
const codeCss = {};

// 2. В объекте codeCss создаем свойство aside
codeCss.aside = createAside();

// 3. В объекте codeCss создаем свойство main
codeCss.main = createMain();

// 4. Экспортируем функцию showCodeCss()
export default function showCodeCss() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeCss.aside);
    mainAside.append(codeCss.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
