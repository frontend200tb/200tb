/****************
Скрипт из файла spbgu.js
Объект spbgu содержит страницу spbgu
Функция showSpbgu показывает страницу spbgu
*****************/
import './js/element-spbgu';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект spbgu
const spbgu = {};

// 2. В объекте spbgu создаем свойство aside
spbgu.aside = createAside();

// 3. В объекте spbgu создаем свойство main
spbgu.main = createMain();

// 4. Экспортируем функцию showSpbgu()
export default function showSpbgu() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(spbgu.aside);
    mainAside.append(spbgu.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
