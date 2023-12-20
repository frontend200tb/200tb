/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import htmlHttp from './elem-other-http.html';
import htmlWs from './elem-other-websocket.html';
import htmlVerdaccio from './elem-other-verdaccio.html';
import htmlHaq from './elem-other-haq.html';
import htmlArticles from './elem-other-articles.html';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#other');

  const asideHttp = document.getElementById('other-http');
  if (asideHttp) {
    asideHttp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlHttp;
      contentOrder();
    });
  }

  const asideWebsocket = document.getElementById('other-websocket');
  if (asideWebsocket) {
    asideWebsocket.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlWs;
      contentOrder();
    });
  }

  const asideVerdaccio = document.getElementById('other-verdaccio');
  if (asideVerdaccio) {
    asideVerdaccio.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlVerdaccio;
      contentOrder();
    });
  }

  const asideHaq = document.getElementById('other-howaskquestions');
  if (asideHaq) {
    asideHaq.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlHaq;
      contentOrder();
    });
  }

  const asideArticles = document.getElementById('other-articles');
  if (asideArticles) {
    asideArticles.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlArticles;
      contentOrder();
    });
  }
}
