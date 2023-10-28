/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import './elem-offline-algorithm';
import './elem-offline-http';
import './elem-offline-websocket';
import './elem-offline-verdaccio';
import './elem-offline-haq';
import './elem-offline-articles';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#offline');

  const asideAlgorithm = document.getElementById('offline-algorithm');
  if (asideAlgorithm) {
    asideAlgorithm.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-algorithm></offline-algorithm>';
      contentOrder();
    });
  }

  const asideHttp = document.getElementById('offline-http');
  if (asideHttp) {
    asideHttp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-http></offline-http>';
      contentOrder();
    });
  }

  const asideWebsocket = document.getElementById('offline-websocket');
  if (asideWebsocket) {
    asideWebsocket.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-websocket></offline-websocket>';
      contentOrder();
    });
  }

  const asideVerdaccio = document.getElementById('offline-verdaccio');
  if (asideVerdaccio) {
    asideVerdaccio.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-verdaccio></offline-verdaccio>';
      contentOrder();
    });
  }

  const asideHaq = document.getElementById('offline-howaskquestions');
  if (asideHaq) {
    asideHaq.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-haq></offline-haq>';
      contentOrder();
    });
  }

  const asideArticles = document.getElementById('offline-articles');
  if (asideArticles) {
    asideArticles.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<offline-articles></offline-articles>';
      contentOrder();
    });
  }
}
