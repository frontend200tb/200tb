/************************
Скрипт из файла front-soft.js
Объект frontSoft содержит страницу front-soft
Функция showFrontSoft показывает страницу front-soft
************************/
import './js/element-front-soft';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontSoft
const frontSoft = {};

// 2. В объекте frontSoft создаем свойство aside
frontSoft.aside = createAside();

// 3. В объекте frontSoft создаем свойство main
frontSoft.main = createMain();

// 4. Экспортируем функцию showFrontSoft()
export default function showFrontSoft() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontSoft.aside);
    mainAside.append(frontSoft.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
