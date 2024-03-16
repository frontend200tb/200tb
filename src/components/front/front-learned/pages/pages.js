/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlAll from './elem-all.html';
import htmlBooks from './elem-books.html';
import htmlVideo from './elem-video.html';
import htmlCourses from './elem-courses.html';
import htmlYoutube from './elem-youtube.html';
import htmlLayout from './elem-layout.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const aside = [
    htmlAll,
    htmlBooks,
    htmlVideo,
    htmlCourses,
    htmlYoutube,
    htmlLayout
  ];

  const currentContent = document.querySelector('#learned');
  const asideItems = document.querySelectorAll('.aside a');

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
