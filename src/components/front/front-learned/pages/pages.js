/******************
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlAll from './elem-all.html';
import htmlBooks from './elem-books.html';
import htmlVideo from './elem-video.html';
import htmlCourses from './elem-courses.html';
import htmlYoutube from './elem-youtube.html';
import htmlLayout from './elem-layout.html';

const aside = [
  htmlAll,
  htmlBooks,
  htmlVideo,
  htmlCourses,
  htmlYoutube,
  htmlLayout,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink(asideItems) {
  const currentContent = main;

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = aside[index];
    });
  }
}
