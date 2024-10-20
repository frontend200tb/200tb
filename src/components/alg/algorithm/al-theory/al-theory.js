/****************
Скрипт из файла al-theory.js
Функция showAlTheory показывает страницу al-theory
*****************/
import './js/element-al-theory';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект alTheory
const alTheory = {};

// 2. В объекте alTheory создаем свойство aside
alTheory.aside = aside;

// 3. В объекте alTheory создаем свойство main
alTheory.main = main;

// 4. Экспортируем функцию showAlTheory()
export default function showAlTheory() {
  const alTheoryElement = document.querySelector('.al-theory');
  const mainAside = alTheoryElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(alTheory.aside);
  mainAside.append(alTheory.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  alTheory.aside.firstElementChild.dispatchEvent(eventClick);
}
