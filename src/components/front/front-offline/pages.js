/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import showFrontBase from './../front-base/front-base';
import showFrontFramework from './../front-framework/front-framework';
import showFrontTools from './../front-tools/front-tools';
import showFrontOther from './../front-other/front-other';

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

  const navFramework = document.getElementById('offline-framework');
  if (navFramework) {
    navFramework.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-framework></front-framework>';
      showFrontFramework();
    });
  }

  const navTools = document.getElementById('offline-tools');
  if (navTools) {
    navTools.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-tools></front-tools>';
      showFrontTools();
    });
  }

  const navOther = document.getElementById('offline-other');
  if (navOther) {
    navOther.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<front-other></front-other>';
      showFrontOther();
    });
  }
}
