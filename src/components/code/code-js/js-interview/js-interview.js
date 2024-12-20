/** *******************
Скрипт из файла js-interview.js
Объект jsInterview содержит страницу js-interview
Функция showJsInterview показывает страницу js-interview
******************** */
import './js/element-js-interview';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsInterview
const jsInterview = {};

// 2. В объекте jsInterview создаем свойство aside
jsInterview.aside = createAside();

// 3. В объекте jsInterview создаем свойство main
jsInterview.main = createMain();

// 4. Экспортируем функцию showJsInterview()
export default function showJsInterview() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsInterview.aside);
    mainAside.append(jsInterview.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
