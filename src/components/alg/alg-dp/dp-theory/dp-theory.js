/****************
Скрипт из файла dp-theory.js
Объект dpTheory содержит страницу dp-theory
Функция showDpTheory показывает страницу dp-theory
*****************/
import './js/element-dp-theory';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект dpTheory
const dpTheory = {};

// 2. В объекте dpTheory создаем свойство aside
dpTheory.aside = createAside();

// 3. В объекте dpTheory создаем свойство main
dpTheory.main = createMain();

// 4. Экспортируем функцию showDpTheory()
export default function showDpTheory() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(dpTheory.aside);
    mainAside.append(dpTheory.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
