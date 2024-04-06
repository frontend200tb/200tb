/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import showFrontBase from './../front-base/front-base';
import showAlgorithm from './../algorithm/algorithm';
import showFrontFramework from './../front-framework/front-framework';
import showFrontTools from './../front-tools/front-tools';
import showFrontNet from './../front-net/front-net';
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

  const navAlgorithm = document.getElementById('offline-2');
  if (navAlgorithm) {
    navAlgorithm.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<base-algorithm></base-algorithm>';
      showAlgorithm();
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

  const navTools = document.getElementById('offline-4');
  if (navTools) {
    navTools.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-tools></front-tools>';
      showFrontTools();
    });
  }

  const navNet = document.getElementById('offline-5');
  if (navNet) {
    navNet.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-net></front-net>';
      showFrontNet();
    });
  }

  const navArticles = document.getElementById('offline-6');
  if (navArticles) {
    navArticles.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-articles></front-articles>';
      showFrontArticles();
    });
  }
}
