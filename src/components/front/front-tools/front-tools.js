/** **************
Скрипт из файла front-tools.js
Функция showFrontTools показывает страницу front-tools
****************** */
/*
Алгоритм работы
1. Создаем массив asideThemes с темами
2. Создаем массив asideDiv для элементов aside меню
3. Для каждой темы из массива asideThemes
  3.1 Создаем элемент elementAside
  3.2 Добавляем элемент elementAside в массив asideDiv
  3.3 По клику на элемент elementAside
    3.3.1 добавим ему class="active"
4. Показываем нужный aside
5. Вешаем обработчики кликов по aside
6. Создадим и вызовем событие click на первом aside эелементе
*/

import './element-front-tools';
import pageLink from './pages/pages';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['Tools', 'Git', 'Notepad++', 'Sublime Text', 'VS Code', 'Vim'];

// 2. Создаем массив asideDiv для элементов aside меню
const asideDiv = [];

// 3. Для каждой темы из массива asideThemes
for (const theme of asideThemes) {
  // 3.1 Создаем элемент elementAside
  const elementAside = document.createElement('a');
  elementAside.href = '#';
  elementAside.innerHTML = theme;
  elementAside.id = createId(theme);

  function createId(str) {
    // удалить всё, кроме букв и цифр
    return `tools-${str.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
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

export default function showFrontTools() {
  const aside = document.querySelector('.aside');

  // 4. Показываем нужный aside
  aside.innerHTML = '';
  aside.append(...asideDiv);

  // 5. Вешаем обработчики кликов по aside
  pageLink();

  // 6. Создадим и вызовем событие click на первом aside эелементе
  const eventClick = new Event('click');
  asideDiv[0].dispatchEvent(eventClick);
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(elementOl, elementLi = null) {
  elementOl.forEach((li) => {
    li.classList.remove('active');
  });
  if (elementLi) {
    elementLi.classList.add('active');
  }
}
