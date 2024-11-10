/****************
Скрипт из файла pascal-base.js
Функция showPascalBase показывает страницу pascal-base
*****************/
import './js/element-pascal-base';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект pascalBase
const pascalBase = {};

// 2. В объекте pascalBase создаем свойство aside
pascalBase.aside = aside;

// 3. В объекте pascalBase создаем свойство main
pascalBase.main = main;

// 4. Экспортируем функцию showPascalBase()
export default function showPascalBase() {
  const pascalBaseElement = document.querySelector('.pascal-base');
  const mainAside = pascalBaseElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(pascalBase.aside);
  mainAside.append(pascalBase.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  pascalBase.aside.firstElementChild.dispatchEvent(eventClick);
}
