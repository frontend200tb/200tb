/** **************
Скрипт из файла front-youtube.js
Функция showFrontYt показывает страницу front-yt
****************** */
/*
Алгоритм работы
1. Создаем объект frontYt
2. В объекте frontYt создаем свойство input
3. В объекте frontYt создаем свойство category
4. В объекте frontYt создаем свойство elements
5. В объекте frontYt создаем свойство mainNav
6. В объекте frontYt создаем свойство elemSection
7. Экспортируем функцию frontYt()
*/

import './element-front-yt';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект frontYt
const frontYt = {};

// 2. В объекте frontYt создаем свойство input
frontYt.input = createInput();

// 3. В объекте frontYt создаем свойство category
frontYt.category = createCategory(frontYt.input);

// 4. В объекте frontYt создаем свойство elements
frontYt.elements = createElements(frontYt.category);

// 5. В объекте frontYt создаем свойство mainNav
frontYt.mainNav = createElemMainNav(frontYt.elements);

// 6. В объекте frontYt создаем свойство elemSection
frontYt.elemSection = createElemSection(frontYt.elements);

// 7. Экспортируем функцию showFrontYt()
export default function showFrontYt() {
  console.log('frontYt', frontYt);
  const elementFrontYt = document.querySelector('.front-yt');
  if (elementFrontYt) {
    elementFrontYt.append(frontYt.mainNav);
    elementFrontYt.append(frontYt.elemSection);
  }
}
