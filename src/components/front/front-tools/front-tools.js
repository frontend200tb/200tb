/************************
Скрипт из файла front-tools.js
Объект frontTools содержит страницу front-tools
Функция showFrontTools показывает страницу front-tools
************************/
import './js/element-front-tools';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontTools
const frontTools = {};

// 2. В объекте frontTools создаем свойство aside
frontTools.aside = createAside();

// 3. В объекте frontTools создаем свойство main
frontTools.main = createMain();

// 4. Экспортируем функцию showFrontTools()
export default function showFrontTools() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontTools.aside);
    mainAside.append(frontTools.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
