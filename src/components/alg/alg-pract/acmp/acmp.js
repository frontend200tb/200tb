/** *******************
Скрипт из файла acmp.js
Объект acmp содержит страницу alg-acmp
Функция showAcmp показывает страницу acmp
******************** */
import './js/element-acmp';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект acmp
const acmp = {};

// 2. В объекте acmp создаем свойство aside
acmp.aside = createAside();

// 3. В объекте acmp создаем свойство main
acmp.main = createMain();

// 4. Экспортируем функцию showAcmp()
export default function showAcmp() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(acmp.aside);
    mainAside.append(acmp.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
