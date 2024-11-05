/****************
Скрипт из файла dp-theory.js
Функция showDpTheory показывает страницу dp-theory
*****************/
import './js/element-dp-theory';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект dpTheory
const dpTheory = {};

// 2. В объекте dpTheory создаем свойство aside
dpTheory.aside = aside;

// 3. В объекте dpTheory создаем свойство main
dpTheory.main = main;

// 4. Экспортируем функцию showDpTheory()
export default function showDpTheory() {
  const dpTheoryElement = document.querySelector('.dp-theory');
  const mainAside = dpTheoryElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(dpTheory.aside);
  mainAside.append(dpTheory.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  dpTheory.aside.firstElementChild.dispatchEvent(eventClick);
}
