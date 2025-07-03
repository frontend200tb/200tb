/** *******************
Скрипт из файла cpp-books.js
Объект cppBooks содержит страницу cpp-books
Функция showCppBooks показывает страницу cpp-books
******************** */
import './js/element-cpp-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cppBooks
const cppBooks = {};

// 2. В объекте cppBooks создаем свойство aside
cppBooks.aside = createAside();

// 3. В объекте cppBooks создаем свойство main
cppBooks.main = createMain();

// 4. Экспортируем функцию showCppBooks()
export default function showCppBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cppBooks.aside);
    mainAside.append(cppBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
