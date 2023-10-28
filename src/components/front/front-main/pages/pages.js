/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import './elem-main-roadmap';
import './elem-main-hosting';
import './elem-main-playground';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('.list');

  const asideRoadmap = document.getElementById('main-roadmap');

  if (asideRoadmap) {
    asideRoadmap.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<main-roadmap></main-roadmap>';
    });
  }

  const asideHosting = document.getElementById('main-hosting');
  if (asideHosting) {
    asideHosting.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<main-hosting></main-hosting>';
      contentOrder();
    });
  }

  const asidePlayground = document.getElementById('main-playground');
  if (asidePlayground) {
    asidePlayground.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<main-playground></main-playground>';
      contentOrder();
    });
  }
}
