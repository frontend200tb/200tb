/** *******************
Скрипт из файла js-books.js
Объект jsBooks содержит страницу js-books
Функция showJsBooks показывает страницу js-books
******************** */
import './js/element-js-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsBooks
const jsBooks = {};

// 2. В объекте jsBooks создаем свойство aside
jsBooks.aside = createAside();

// 3. В объекте jsBooks создаем свойство main
jsBooks.main = createMain();

// 4. Экспортируем функцию showJsBooks()
export default function showJsBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsBooks.aside);
    mainAside.append(jsBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
