/** *******************
Скрипт из файла asm-books.js
Объект asmBooks содержит страницу asm-books
Функция showAsmBooks показывает страницу asm-books
******************** */
import './js/element-asm-books';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект asmBooks
const asmBooks = {};

// 2. В объекте asmBooks создаем свойство aside
asmBooks.aside = createAside();

// 3. В объекте asmBooks создаем свойство main
asmBooks.main = createMain();

// 4. Экспортируем функцию showAsmBooks()
export default function showCBooks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(asmBooks.aside);
    mainAside.append(asmBooks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
