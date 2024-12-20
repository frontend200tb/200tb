/** *******************
Скрипт из файла js-practice.js
Объект jsPractice содержит страницу js-practice
Функция showJsPractice показывает страницу js-practice
******************** */
import './js/element-js-practice';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsPractice
const jsPractice = {};

// 2. В объекте jsPractice создаем свойство aside
jsPractice.aside = createAside();

// 3. В объекте jsPractice создаем свойство main
jsPractice.main = createMain();

// 4. Экспортируем функцию showJsPractice()
export default function showJsPractice() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsPractice.aside);
    mainAside.append(jsPractice.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
