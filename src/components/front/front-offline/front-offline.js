/** **************
Скрипт из файла front-offline.js
Навигация по теме Offline
основы framework tools net articles
****************** */
import './element-front-offline';
import {dataOfflineNav} from './data-offline-nav';


// Создаем ссылки для меню mainnav
createMainNav(dataOfflineNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const offline = document.getElementById('offline');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      offline.innerHTML = el.content;
      el.act();
    });
  });
}

function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function showFrontOffline() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataOfflineNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataOfflineNav[0].elem.dispatchEvent(eventClick);
}
