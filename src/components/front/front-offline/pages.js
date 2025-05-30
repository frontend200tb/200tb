/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import showFrontBase from './../front-base/front-base';
import showFrontNets from './../front-nets/front-nets';
import showFrontFramework from './../front-framework/front-framework';
import showFrontArticles from './../front-articles/front-articles';

export default function pageLink() {
  const currentContent = document.querySelector('#offline');

  const navBase = document.getElementById('offline-1');
  if (navBase) {
    navBase.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-base></front-base>';
      showFrontBase();
    });
  }

  const navNets = document.getElementById('offline-2');
  if (navNets) {
    navNets.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-nets></front-nets>';
      showFrontNets();
    });
  }

  const navFramework = document.getElementById('offline-3');
  if (navFramework) {
    navFramework.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-framework></front-framework>';
      showFrontFramework();
    });
  }

  const navArticles = document.getElementById('offline-4');
  if (navArticles) {
    navArticles.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-articles></front-articles>';
      showFrontArticles();
    });
  }
}
