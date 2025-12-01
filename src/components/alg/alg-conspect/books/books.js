/****************
Скрипт из файла books.js
Объект books содержит страницу alg-books
Функция showBooks показывает страницу alg-books
*****************/
import './js/element-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект books
const books = {};

// 2. В объекте books создаем свойство aside
books.aside = createAside();

// 3. В объекте books создаем свойство main
books.main = createMain();

// 4. Экспортируем функцию showBooks()
export default function showBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(books.aside);
    mainAside.append(books.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
