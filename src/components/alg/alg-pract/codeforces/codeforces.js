/** *******************
Скрипт из файла codeforces.js
Объект codeforces содержит страницу alg-codeforces
Функция showCodeforces показывает страницу codeforces
******************** */
import './js/element-codeforces';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeforces
const codeforces = {};

// 2. В объекте codeforces создаем свойство aside
codeforces.aside = createAside();

// 3. В объекте codeforces создаем свойство main
codeforces.main = createMain();

// 4. Экспортируем функцию showCodeforces()
export default function showCodeforces() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeforces.aside);
    mainAside.append(codeforces.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
