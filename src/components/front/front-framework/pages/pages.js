import contentOrder from '../../../../js/order';
import htmlNodeAngular from './elem-node-angular.html';
import htmlNodeReact from './elem-node-react.html';
import htmlNodeVue from './elem-node-vue.html';


// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#framework');

  const asideAngular = document.getElementById('framework-angular');
  if (asideAngular) {
    asideAngular.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeAngular;
      contentOrder();
    });
  }

  const asideReact = document.getElementById('framework-react');
  if (asideReact) {
    asideReact.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeReact;
      contentOrder();
    });
  }

  const asideVue = document.getElementById('framework-vue');
  if (asideVue) {
    asideVue.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeVue;
      contentOrder();
    });
  }
}
