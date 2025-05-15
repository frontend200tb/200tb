/** **************
Скрипт из файла lib-books.js
Функция showLibBooks показывает страницу lib-books
****************** */
/*
Алгоритм работы
1. Создаем объект libBooks
2. В объекте libBooks создаем свойство input
3. В объекте libBooks создаем свойство category
4. В объекте libBooks создаем свойство elements
5. В объекте libBooks создаем свойство mainNav
6. В объекте libBooks создаем свойство elemSection
7. Экспортируем функцию showLibBooks()
*/

import './js/element-lib-books';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект libBooks
const libBooks = {};

// 2. В объекте libBooks создаем свойство input
libBooks.input = createInput();

// 3. В объекте libBooks создаем свойство category
libBooks.category = createCategory(libBooks.input);

// 4. В объекте libBooks создаем свойство elements
libBooks.elements = createElements(libBooks.category);

// 5. В объекте libBooks создаем свойство mainNav
libBooks.mainNav = createElemMainNav(libBooks.elements);

// 6. В объекте libBooks создаем свойство elementSection
libBooks.elemSection = createElemSection(libBooks.elements);

// 7. Экспортируем функцию showLibBooks()
export default function showLibBooks() {
  const elementLibBooks = document.querySelector('.lib-books');

  if (elementLibBooks) {
    elementLibBooks.innerHTML = '';
    elementLibBooks.append(libBooks.mainNav);
    elementLibBooks.append(libBooks.elemSection);
  }
}
