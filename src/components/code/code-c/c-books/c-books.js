/** *******************
Скрипт из файла c-books.js
Объект cBooks содержит страницу c-books
Функция showCBooks показывает страницу c-books
******************** */
import './js/element-c-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cBooks
const cBooks = {};

// 2. В объекте cBooks создаем свойство aside
cBooks.aside = createAside();

// 3. В объекте cBooks создаем свойство main
cBooks.main = createMain();

// 4. Экспортируем функцию showCBooks()
export default function showCBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cBooks.aside);
    mainAside.append(cBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
