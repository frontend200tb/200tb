/** *******************
Скрипт из файла cpp-base.js
Объект cppBase содержит страницу cpp-base
Функция showCppBase показывает страницу cpp-base
******************** */
import './js/element-cpp-base';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cppBase
const cppBase = {};

// 2. В объекте cppBase создаем свойство aside
cppBase.aside = createAside();

// 3. В объекте cppBase создаем свойство main
cppBase.main = createMain();

// 4. Экспортируем функцию showCppBase()
export default function showCppBase() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cppBase.aside);
    mainAside.append(cppBase.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
