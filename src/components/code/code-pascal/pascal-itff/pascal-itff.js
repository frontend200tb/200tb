/****************
Скрипт из файла pascal-itff.js
Объект pascalItff содержит страницу pascal-itff
Функция showPascalItff показывает страницу pascal-itff
*****************/
import './js/element-pascal-itff';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект pascalItff
const pascalItff = {};

// 2. В объекте pascalItff создаем свойство aside
pascalItff.aside = createAside();

// 3. В объекте pascalItff создаем свойство main
pascalItff.main = createMain();

// 4. Экспортируем функцию showPascalItff()
export default function showPascalItff() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(pascalItff.aside);
    mainAside.append(pascalItff.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
