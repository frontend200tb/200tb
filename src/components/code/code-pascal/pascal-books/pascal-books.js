/****************
Скрипт из файла pascal-books.js
Объект pascalBooks содержит страницу pascal-books
Функция showPascalBooks показывает страницу pascal-books
*****************/
import './js/element-pascal-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект pascalBooks
const pascalBooks = {};

// 2. В объекте pascalBooks создаем свойство aside
pascalBooks.aside = createAside();

// 3. В объекте pascalBooks создаем свойство main
pascalBooks.main = createMain();

// 4. Экспортируем функцию showPascalBooks()
export default function showPascalBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(pascalBooks.aside);
    mainAside.append(pascalBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
