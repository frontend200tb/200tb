/** **************
Скрипт из файла front-offline.js
Функция showFrontOffline показывает страницу front-offline
****************** */
import './element-front-offline';
import pageLink from './pages';

// 1. Создадим контент для #main-nav
// 1.1 Создаем массив categories с категориями
const categories = ['основы', 'алгоритмы', 'framework', 'tools', 'net', 'articles'];

// 1.2 Создаем массив mainNav для элементов nav меню
const mainNav = [];

// Функция создает id для элемента меню
let idNameSuffix = 1;
function createId(str) {
  str = idNameSuffix;
  idNameSuffix++;
  return `offline-${str}`;
}

// 1.3 Для каждой категории из массива categories
for (const category of categories) {
  // 1.3.1 Создаем элемент elementNav
  const elementNav = document.createElement('a');
  elementNav.href = '#';
  elementNav.innerHTML = category;
  elementNav.id = createId(category);

  // 1.3.2 Добавляем элемент elementNav в массив mainNav
  mainNav.push(elementNav);

  // 1.3.3 По клику на элемент elementNav
  elementNav.addEventListener('click', (e) => {
    e.preventDefault();

    // 1.3.3.1 добавим ему class="active"
    classActive(mainNav, elementNav);
  });
}

export default function showFrontOffline() {
  const elemMainNav = document.querySelector('#main-nav');

  // 4. Показываем нужный main-nav
  elemMainNav.innerHTML = '';
  elemMainNav.append(...mainNav);

  // 5. Вешаем обработчики кликов по main-nav
  pageLink();

  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  mainNav[0].dispatchEvent(eventClick);
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(elementOl, elementLi) {
  elementOl.forEach((li) => {
    li.classList.remove('active');
  });
  elementLi.classList.add('active');
}
