/****************
Скрипт из файла alg-theory.js
Объект algTheory содержит страницу alg-theory
Функция showAlgTheory показывает страницу alg-theory
*****************/
import './js/element-alg-theory';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект algTheory
const algTheory = {};

// 2. В объекте algTheory создаем свойство aside
algTheory.aside = createAside();

// 3. В объекте algTheory создаем свойство main
algTheory.main = createMain();

// 4. Экспортируем функцию showAlgTheory()
export default function showAlgTheory() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(algTheory.aside);
    mainAside.append(algTheory.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
