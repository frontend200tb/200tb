/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import './elem-learned-all';
import './elem-learned-books';
import './elem-learned-video';
import './elem-learned-courses';
import './elem-learned-youtube';
import './elem-learned-layout';

export default function pageLink() {
  const currentContent = document.querySelector('#learned');

  const asideAll = document.getElementById('learned-all');
  if (asideAll) {
    asideAll.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-all></learned-all>';
    });
  }

  const asideBooks = document.getElementById('learned-books');
  if (asideBooks) {
    asideBooks.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-books></learned-books>';
    });
  }

  const asideVideo = document.getElementById('learned-video');
  if (asideVideo) {
    asideVideo.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-video></learned-video>';
    });
  }

  const asideCourses = document.getElementById('learned-onlinecourses');
  if (asideCourses) {
    asideCourses.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-courses></learned-courses>';
    });
  }

  const asideYoutube = document.getElementById('learned-youtube');
  if (asideYoutube) {
    asideYoutube.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-youtube></learned-youtube>';
    });
  }

  const asideLayout = document.getElementById('learned-верстка');
  if (asideLayout) {
    asideLayout.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<learned-layout></learned-layout>';
    });
  }
}
