/** **************
Скрипт из файла front-main.js
Функция showFront показывает страницу front
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
6. Вызываем функцию showHide
*/

import './element-front-main';
import pageLink from './pages/pages';
import showHide from '../../../js/showhide';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['Roadmap', 'Hosting', 'Playground'];

// 2. Создаем массив asideDiv для элементов aside меню
export const asideDiv = [];

// 3. Для каждой темы из массива asideThemes
for (const theme of asideThemes) {
  // 3.1 Создаем элемент elementAside
  const elementAside = document.createElement('a');
  elementAside.href = `main-${theme.toLowerCase()}`;
  elementAside.innerHTML = theme;
  elementAside.id = `main-${theme.toLowerCase()}`;

  // 3.2 Добавляем элемент elementAside в массив asideDiv
  asideDiv.push(elementAside);

  // 3.3 По клику на элемент elementAside
  elementAside.addEventListener('click', (e) => {
    e.preventDefault();

    // 3.3.1 добавим ему class="active"
    classActive(asideDiv, elementAside);
  });
}

export default function showFront() {
  const aside = document.querySelector('.aside');

  // 4 Показываем нужный aside
  aside.innerHTML = '';
  aside.append(...asideDiv);

  // 5. Вешаем обработчики кликов по aside
  pageLink();

  // 6. Вызываем функцию showHide
  showHide();

  // 7. Убираем class="activ" со всех элементов aside меню
  classActive(asideDiv, null);
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
