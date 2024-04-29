/** ***************
Функция createInput создает inputArray
**************** */
import pageLink from './../pages/pages';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['RSS 2024 Stage2', 'Courses', 'Courses learned',
'Learning', 'RS School', 'RSS 2022 Stage0', 'RSS 2022 Stage1',
'RSS 2022 Stage3 Angular', 'DSR 2023 .Net', 'RSS 2023 Stage0',
'RSS 2023 Stage1', 'Quiz', 'JS Examples'];

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
    return `edu-${str.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
  }

  // 3.2 Добавляем элемент elementAside в массив asideDiv
  asideDiv.push(elementAside);

  // 3.3 По клику на элемент elementAside
  elementAside.addEventListener('click', (e) => {
    e.preventDefault();

    // 3.3.1 добавим ему class="active"
    classActive(asideDiv, elementAside);
  });
}
export function removeClassActive() {
  classActive(asideDiv);
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

const aside = document.createElement('aside');
aside.classList.add('aside');
aside.append(...asideDiv);

export const main = document.createElement('main');
main.classList.add('main');
main.id = 'edu';

pageLink(asideDiv);

export function createAside() {
  return aside;
}

export function createMain() {
  return main;
}
