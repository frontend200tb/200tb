/** **************
Скрипт из файла front-vacancy.js
Функция showFrontVacancy показывает страницу front-vacancy
****************** */
/*
Алгоритм работы
1. Создаем объект data упорядоченный по темам
2. Создаем массив asideDiv для элементов aside меню
3. Для каждой темы
  3.1 Создаем элемент elementAside
  3.2 Добавляем элемент elementAside в массив asideDiv
  3.3 Создаем массив mainDiv для элементов main
  3.4 Для каждой группы
    3.4.1 Создаем элемент elementH3
    3.4.2 Добавляем элемент elementH3 в массив mainDiv
    3.4.3 Создаем массив listUl для списка внутри группы
    3.4.4 Для каждого заголовка
      3.4.4.1 Добавим в массив listUl массив со списком
8. Создаем элемент elementsMain для каждой темы
9. По клику на элемент aside меню
  9.1 добавим ему class="active"
  9.2 показываем нужный заголовок h2
  9.3 показываем нужный main
10. Добавим на страницу aside меню
11. Создадим и вызовем событие click на первом aside эелементе
*/

import './element-front-vacancy';

import { pageLink, metalampLinks } from './pages/pages';
import createData from './js/create-data';
import createList from './js/create-list';

// 1. Создаем объект data упорядоченный по темам и группам
const data = createData();

// 2. Создаем массив asideThemes с темами из PageLink
const asideThemes = ['Postcross', 'Interview'];

export default function showFrontVacancy() {
  const currentContent = document.querySelector('#vacancy');
  const aside = document.querySelector('.aside');

  // 3. Создаем массив asideDiv для элементов aside меню с темами из data
  const asideDiv = [];

  // 3. Для каждой темы из data
  for (const theme in data) {
    // 3.1 Создаем элемент elementAside
    const elementAside = document.createElement('a');
    elementAside.href = '#';
    elementAside.innerHTML = theme;

    // 3.2 Добавляем элемент elementAside в массив asideDiv
    asideDiv.push(elementAside);

    // 3.3 Создаем массив mainDiv для элементов main
    const mainDiv = [];

    // 3.4 Для каждой группы
    for (const header3 in data[theme]) {
      // 3.4.1 Создаем элемент elementH3
      const elementH3 = document.createElement('h3');
      elementH3.innerHTML = header3;

      // 3.4.2 Добавляем элемент elementH3 в массив mainDiv
      mainDiv.push(elementH3);

      // 3.4.3 Создаем массив listUl для списка внутри группы
      const listUl = [];

      // 3.4.4 Для каждого заголовка
      for (const content of data[theme][header3]) {
        // 3.4.4.1 Добавим в массив listUl массив со списком
        listUl.push(content);
      }

      // 11. Создаем элемент elementsMain для каждой темы
      const elementUl = createList(listUl);

      // 9. Добавляем элемент elementUl в колонку с элементами
      mainDiv.push(elementUl);
    }

    // Если есть заголовок то создаем его
    if (data.header2) {
      const elementH2 = document.createElement('h2');
      elementH2.innerHTML = data.header2;
      mainDiv.push(elementH2);
    }

    // 12. По клику на элемент aside меню
    elementAside.addEventListener('click', (e) => {
      e.preventDefault();

      // 12.1 добавим ему class="active"
      classActive(asideDiv, elementAside);

      // 12.3 показываем нужный main
      currentContent.innerHTML = '';
      currentContent.append(...mainDiv);

      // 12.4 ссылки на странице metalamp
      metalampLinks();
    });
  }

  // 3. Для каждой темы из массива asideThemes
  for (const theme of asideThemes) {
    // 3.1 Создаем элемент elementAside
    const elementAside = document.createElement('a');
    elementAside.href = '#';
    elementAside.innerHTML = theme;
    elementAside.id = createId(theme);

    function createId(str) {
      // удалить всё, кроме букв и цифр
      return `vacancy-${str.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
    }

    // 3.2 Добавляем элемент elementAside в массив asideDiv
    asideDiv.push(elementAside);

    // 3.3 По клику на элемент aside меню
    elementAside.addEventListener('click', (e) => {
      e.preventDefault();

      // 3.3.1 добавим ему class="active"
      classActive(asideDiv, elementAside);
    });
  }

  // 13.2 показываем нужный aside
  aside.innerHTML = '';
  aside.append(...asideDiv);

  // 5. Вешаем обработчики кликов по aside
  pageLink();

  // 14. Создадим и вызовем событие click на первом aside эелементе
  const eventClick = new Event('click');
  asideDiv[0].dispatchEvent(eventClick);

  // Ставим class="active" выбранному элементу меню и убираем с остальных
  function classActive(elementOl, elementLi) {
    elementOl.forEach((li) => {
      li.classList.remove('active');
    });
    elementLi.classList.add('active');
  }
}
