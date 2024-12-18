/************************
Скрипт из файла front-nets.js
Объект frontNets содержит страницу front-nets
Функция showFrontNets показывает страницу front-nets
************************/
import './js/element-front-nets';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontNets
const frontNets = {};

// 2. В объекте frontNets создаем свойство aside
frontNets.aside = createAside();

// 3. В объекте frontNets создаем свойство main
frontNets.main = createMain();

// 4. Экспортируем функцию showFrontNets()
export default function showFrontNets() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontNets.aside);
    mainAside.append(frontNets.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
