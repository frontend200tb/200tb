/****************
Скрипт из файла pascal-itff.js
Функция showPascalItff показывает страницу pascal-itff
*****************/
import './js/element-pascal-itff';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект pascalItff
const pascalItff = {};

// 2. В объекте pascalItff создаем свойство aside
pascalItff.aside = aside;

// 3. В объекте pascalItff создаем свойство main
pascalItff.main = main;

// 4. Экспортируем функцию showPascalItff()
export default function showPascalItff() {
  const pascalItffElement = document.querySelector('.pascal-itff');
  const mainAside = pascalItffElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(pascalItff.aside);
  mainAside.append(pascalItff.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  pascalItff.aside.firstElementChild.dispatchEvent(eventClick);
}
