/** *******************
Скрипт из файла js-bom.js
Объект jsBom содержит страницу js-bom
Функция showJsBom показывает страницу js-bom
******************** */
import './js/element-js-bom';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsBom
const jsBom = {};

// 2. В объекте jsBom создаем свойство aside
jsBom.aside = createAside();

// 3. В объекте jsBom создаем свойство main
jsBom.main = createMain();

// 4. Экспортируем функцию showJsBom()
export default function showJsBom() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsBom.aside);
    mainAside.append(jsBom.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
