/** ***************
Функция createInput создает inputArray
**************** */
import pageLink from './../pages/pages';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['Vacancy', 'Epam', 'DSR', 'Neoflex', 'Yandex', 'Ozon', 'Avito', 'Tinkoff', 'Sber', 'Interview', 'Postcross', 'Приглашения', 'Отказы', 'Без ответа', 'Skills'];

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
main.classList.add('list');
main.id = 'vacancy';

pageLink(asideDiv);

export function createAside() {
  return aside;
}

export function createMain() {
  return main;
}
