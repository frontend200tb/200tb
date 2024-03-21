/** **************
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */

// Aside
import htmlOsimodel from './elem-osi-model.html';
import htmlApi from './elem-api.html';
import htmlRest from './elem-rest.html';
import htmlHttp from './elem-http.html';
import htmlSsl from './elem-ssl.html';
import htmlWs from './elem-websocket.html';
import htmlWeb from './elem-web.html';

// массив страниц из aside menu
const aside = [
  htmlOsimodel,
  htmlApi,
  htmlRest,
  htmlHttp,
  htmlSsl,
  htmlWs,
  htmlWeb,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {  
  const currentContent = document.querySelector('#net');
  
  // собрать все ссылки в aside menu
  const asideItems = document.querySelectorAll('.aside a');

  // если ссылки в aside menu есть, то по клику показывать нужную страницу
  if (asideItems) {
    asideItems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        currentContent.innerHTML = aside[index];
      });
    })
  }
}
