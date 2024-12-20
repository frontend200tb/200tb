/** *******************
Скрипт из файла js-datatypes.js
Объект jsDatatypes содержит страницу js-datatypes
Функция showJsDatatypes показывает страницу js-datatypes
******************** */
import './js/element-js-datatypes';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsDatatypes
const jsDatatypes = {};

// 2. В объекте jsDatatypes создаем свойство aside
jsDatatypes.aside = createAside();

// 3. В объекте jsDatatypes создаем свойство main
jsDatatypes.main = createMain();

// 4. Экспортируем функцию showJsDatatypes()
export default function showJsDatatypes() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsDatatypes.aside);
    mainAside.append(jsDatatypes.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
