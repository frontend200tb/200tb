/** *******************
Скрипт из файла leetcode.js
Объект leetcode содержит страницу alg-leetcode
Функция showLeetcode показывает страницу leetcode
******************** */
import './js/element-leetcode';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект leetcode
const leetcode = {};

// 2. В объекте leetcode создаем свойство aside
leetcode.aside = createAside();

// 3. В объекте leetcode создаем свойство main
leetcode.main = createMain();

// 4. Экспортируем функцию showLeetcode()
export default function showLeetcode() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(leetcode.aside);
    mainAside.append(leetcode.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
