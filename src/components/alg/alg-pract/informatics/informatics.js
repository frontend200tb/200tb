/** *******************
Скрипт из файла informatics.js
Объект informatics содержит страницу alg-informatics
Функция showInformatics показывает страницу informatics
******************** */
import './js/element-informatics';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект informatics
const informatics = {};

// 2. В объекте informatics создаем свойство aside
informatics.aside = createAside();

// 3. В объекте informatics создаем свойство main
informatics.main = createMain();

// 4. Экспортируем функцию showInformatics()
export default function showInformatics() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(informatics.aside);
    mainAside.append(informatics.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
