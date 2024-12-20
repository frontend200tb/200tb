/****************
Скрипт из файла pascal-base.js
Объект pascalBase содержит страницу pascal-base
Функция showPascalBase показывает страницу pascal-base
*****************/
import './js/element-pascal-base';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект pascalBase
const pascalBase = {};

// 2. В объекте pascalBase создаем свойство aside
pascalBase.aside = createAside();

// 3. В объекте pascalBase создаем свойство main
pascalBase.main = createMain();

// 4. Экспортируем функцию showPascalBase()
export default function showPascalBase() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(pascalBase.aside);
    mainAside.append(pascalBase.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
