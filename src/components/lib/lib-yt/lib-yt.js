/** **************
Скрипт из файла lib-youtube.js
Функция showLibYt показывает страницу lib-yt
****************** */
/*
Алгоритм работы
1. Создаем объект libYt
2. В объекте libYt создаем свойство input
3. В объекте libYt создаем свойство category
4. В объекте libYt создаем свойство elements
5. В объекте libYt создаем свойство mainNav
6. В объекте libYt создаем свойство elemSection
7. Экспортируем функцию libYt()
*/

import './js/element-lib-yt';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект libYt
const libYt = {};

// 2. В объекте libYt создаем свойство input
libYt.input = createInput();

// 3. В объекте libYt создаем свойство category
libYt.category = createCategory(libYt.input);

// 4. В объекте libYt создаем свойство elements
libYt.elements = createElements(libYt.category);

// 5. В объекте libYt создаем свойство mainNav
libYt.mainNav = createElemMainNav(libYt.elements);

// 6. В объекте libYt создаем свойство elemSection
libYt.elemSection = createElemSection(libYt.elements);

// 7. Экспортируем функцию showLibYt()
export default function showLibYt() {
  const elementLibYt = document.querySelector('.lib-yt');

  if (elementLibYt) {
    elementLibYt.innerHTML = '';
    elementLibYt.append(libYt.mainNav);
    elementLibYt.append(libYt.elemSection);
  }
}
