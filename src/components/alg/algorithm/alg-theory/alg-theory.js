/****************
Скрипт из файла alg-theory.js
Функция showAlgTheory показывает страницу alg-theory
*****************/
import './js/element-alg-theory';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект algTheory
const algTheory = {};

// 2. В объекте algTheory создаем свойство aside
algTheory.aside = aside;

// 3. В объекте algTheory создаем свойство main
algTheory.main = main;

// 4. Экспортируем функцию showAlgTheory()
export default function showAlgTheory() {
  const algTheoryElement = document.querySelector('.alg-theory');
  const mainAside = algTheoryElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(algTheory.aside);
  mainAside.append(algTheory.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  algTheory.aside.firstElementChild.dispatchEvent(eventClick);
}
