/** **************
Скрипт из файла lib-vk.js
Функция showLibVk показывает страницу lib-vk
****************** */
/*
Алгоритм работы
1. Создаем объект libVk
2. В объекте libVk создаем свойство input
3. В объекте libVk создаем свойство category
4. В объекте libVk создаем свойство elements
5. В объекте libVk создаем свойство mainNav
6. В объекте libVk создаем свойство elemSection
7. Экспортируем функцию libVk()
*/

import './js/element-lib-vk';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект libVk
const libVk = {};

// 2. В объекте libVk создаем свойство input
libVk.input = createInput();

// 3. В объекте libVk создаем свойство category
libVk.category = createCategory(libVk.input);

// 4. В объекте libVk создаем свойство elements
libVk.elements = createElements(libVk.category);

// 5. В объекте libVk создаем свойство mainNav
libVk.mainNav = createElemMainNav(libVk.elements);

// 6. В объекте libVk создаем свойство elemSection
libVk.elemSection = createElemSection(libVk.elements);

// 7. Экспортируем функцию showLibVk()
export default function showLibVk() {
  const elementLibVk = document.querySelector('.lib-vk');

  if (elementLibVk) {
    elementLibVk.innerHTML = '';
    elementLibVk.append(libVk.mainNav);
    elementLibVk.append(libVk.elemSection);
  }
}
