/************************
Скрипт из файла front-base.js
Объект frontBase содержит страницу front-base
Функция showFrontBase показывает страницу front-base
************************/
import './js/element-front-base';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontBase
const frontBase = {};

// 2. В объекте frontBase создаем свойство aside
frontBase.aside = createAside();

// 3. В объекте frontBase создаем свойство main
frontBase.main = createMain();

// 4. Экспортируем функцию showFrontBase()
export default function showFrontBase() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontBase.aside);
    mainAside.append(frontBase.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
