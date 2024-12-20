/** *******************
Скрипт из файла js-dom.js
Объект jsDom содержит страницу js-dom
Функция showJsDom показывает страницу js-dom
******************** */
import './js/element-js-dom';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsDom
const jsDom = {};

// 2. В объекте jsDom создаем свойство aside
jsDom.aside = createAside();

// 3. В объекте jsDom создаем свойство main
jsDom.main = createMain();

// 4. Экспортируем функцию showJsDom()
export default function showJsDom() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsDom.aside);
    mainAside.append(jsDom.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
