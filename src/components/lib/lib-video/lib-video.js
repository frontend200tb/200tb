/** **************
Скрипт из файла lib-video.js
Функция showLibVideo показывает страницу lib-video
****************** */
/*
Алгоритм работы
1. Создаем объект libVideo
2. В объекте libVideo создаем свойство input
3. В объекте libVideo создаем свойство category
4. В объекте libVideo создаем свойство elements
5. В объекте libVideo создаем свойство mainNav
6. В объекте libVideo создаем свойство elemSection
7. Экспортируем функцию showLibVideo()
*/

import './js/element-lib-video';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект libVideo
const libVideo = {};

// 2. В объекте libVideo создаем свойство input
libVideo.input = createInput();

// 3. В объекте libVideo создаем свойство category
libVideo.category = createCategory(libVideo.input);

// 4. В объекте libVideo создаем свойство elements
libVideo.elements = createElements(libVideo.category);

// 5. В объекте libVideo создаем свойство mainNav
libVideo.mainNav = createElemMainNav(libVideo.elements);

// 6. В объекте libVideo создаем свойство elementSection
libVideo.elemSection = createElemSection(libVideo.elements);

// 7. Экспортируем функцию showLibVideo()
export default function showLibVideo() {
  const elementLibVideo = document.querySelector('.lib-video');

  if (elementLibVideo) {
    elementLibVideo.innerHTML = '';
    elementLibVideo.append(libVideo.mainNav);
    elementLibVideo.append(libVideo.elemSection);
  }
}
