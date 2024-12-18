/** *******************
Скрипт из файла code-c.js
Объект codeC содержит страницу code-c
Функция showCodeC показывает страницу code-c
******************** */
import './js/element-code-c';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeC
const codeC = {};

// 2. В объекте codeC создаем свойство aside
codeC.aside = createAside();

// 3. В объекте codeC создаем свойство main
codeC.main = createMain();

// 4. Экспортируем функцию showCodeC()
export default function showCodeC() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeC.aside);
    mainAside.append(codeC.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
