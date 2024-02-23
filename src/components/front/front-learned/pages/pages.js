/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlLearnedAll from './elem-learned-all.html';
import htmlLearnedBooks from './elem-learned-books.html';
import htmlLearnedVideo from './elem-learned-video.html';
import htmlLearnedCourses from './elem-learned-courses.html';
import htmlLearnedYoutube from './elem-learned-youtube.html';
import htmlLearnedLayout from './elem-learned-layout.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asideLearned = [htmlLearnedAll, htmlLearnedBooks, htmlLearnedVideo, htmlLearnedCourses, htmlLearnedYoutube, htmlLearnedLayout];  
  const currentContent = document.querySelector('#learned');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asideLearned[index];
    });
  }
}
