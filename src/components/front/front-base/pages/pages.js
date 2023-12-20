import contentOrder from '../../../../js/order';
import htmlAlgorithm from './elem-base-algorithm.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#base');

  const asideAlgorithm = document.getElementById('base-algorithm');
  if (asideAlgorithm) {
    asideAlgorithm.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlAlgorithm;
      contentOrder();
    });
  }
}
