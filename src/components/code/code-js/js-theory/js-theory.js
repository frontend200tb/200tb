/** *******************
Скрипт из файла js-theory.js
Объект jsTheory содержит страницу js-theory
Функция showJsTheory показывает страницу js-theory
******************** */
import './js/element-js-theory';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsTheory
const jsTheory = {};

// 2. В объекте jsTheory создаем свойство aside
jsTheory.aside = createAside();

// 3. В объекте jsTheory создаем свойство main
jsTheory.main = createMain();

// 4. Экспортируем функцию showJsTheory()
export default function showJsTheory() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsTheory.aside);
    mainAside.append(jsTheory.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
