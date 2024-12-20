/** *******************
Скрипт из файла js-corejs.js
Объект jsCorejs содержит страницу js-corejs
Функция showJsCorejs показывает страницу js-corejs
******************** */
import './js/element-js-corejs';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsCorejs
const jsCorejs = {};

// 2. В объекте jsCorejs создаем свойство aside
jsCorejs.aside = createAside();

// 3. В объекте jsCorejs создаем свойство main
jsCorejs.main = createMain();

// 4. Экспортируем функцию showJsCorejs()
export default function showJsCorejs() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsCorejs.aside);
    mainAside.append(jsCorejs.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
