/** *******************
Скрипт из файла code-csharp.js
Функция showCodeCsharp показывает страницу code-csharp
******************** */
import './element-code-csharp';
import pageLink from './pages/pages';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['C#'];

// 2. Создаем массив asideDiv для элементов aside меню
const asideDiv = [];

// Функция создает id для элемента меню
let idNameSuffix = 1;
function createId(str) {
  str = idNameSuffix;
  idNameSuffix++;
  return `csharp-${str}`;
}

// 3. Для каждой темы из массива asideThemes
for (const theme of asideThemes) {
  // 3.1 Создаем элемент elementAside
  const elementAside = document.createElement('a');
  elementAside.href = '#';
  elementAside.innerHTML = theme;
  elementAside.id = createId(theme);

  // 3.2 Добавляем элемент elementAside в массив asideDiv
  asideDiv.push(elementAside);

  // 3.3 По клику на элемент elementAside
  elementAside.addEventListener('click', (e) => {
    e.preventDefault();

    // 3.3.1 добавим ему class="active"
    classActive(asideDiv, elementAside);
  });
}

export default function showCodeCsharp() {
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
function classActive(elementOl, elementLi) {
  elementOl.forEach((li) => {
    li.classList.remove('active');
  });
  elementLi.classList.add('active');
}
