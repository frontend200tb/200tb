/** *******************
Скрипт из файла ftl.js
Объект ftl содержит страницу alg-ftl
Функция showFtl показывает страницу ftl
******************** */
import './js/element-ftl';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект ftl
const ftl = {};

// 2. В объекте ftl создаем свойство aside
ftl.aside = createAside();

// 3. В объекте ftl создаем свойство main
ftl.main = createMain();

// 4. Экспортируем функцию showFtl()
export default function showFtl() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(ftl.aside);
    mainAside.append(ftl.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
