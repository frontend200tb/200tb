/** *******************
Скрипт из файла code-other.js
Объект codeOther содержит страницу code-other
Функция showCodeOther показывает страницу code-other
******************** */
import './js/element-code-other';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeOther
const codeOther = {};

// 2. В объекте codeOther создаем свойство aside
codeOther.aside = createAside();

// 3. В объекте codeOther создаем свойство main
codeOther.main = createMain();

// 4. Экспортируем функцию showCodeOther()
export default function showCodeOther() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeOther.aside);
    mainAside.append(codeOther.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
