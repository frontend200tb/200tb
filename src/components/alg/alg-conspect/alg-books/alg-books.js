/****************
Скрипт из файла alg-books.js
Объект algBooks содержит страницу alg-books
Функция showAlgBooks показывает страницу alg-books
*****************/
import './js/element-alg-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект algBooks
const algBooks = {};

// 2. В объекте algBooks создаем свойство aside
algBooks.aside = createAside();

// 3. В объекте algBooks создаем свойство main
algBooks.main = createMain();

// 4. Экспортируем функцию showAlgBooks()
export default function showAlgBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(algBooks.aside);
    mainAside.append(algBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
