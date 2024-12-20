/** *******************
Скрипт из файла timus.js
Объект timus содержит страницу alg-timus
Функция showTimus показывает страницу timus
******************** */
import './js/element-timus';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект timus
const timus = {};

// 2. В объекте timus создаем свойство aside
timus.aside = createAside();

// 3. В объекте timus создаем свойство main
timus.main = createMain();

// 4. Экспортируем функцию showTimus()
export default function showTimus() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(timus.aside);
    mainAside.append(timus.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
