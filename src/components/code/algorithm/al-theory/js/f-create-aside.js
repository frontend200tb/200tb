/** ***************
Функция createInput создает inputArray
**************** */
import pageLink from './../pages/pages';

// 1. Создаем массив asideThemes с темами
const asideThemes = ['Algorithm', 'Сложность', 'Сортировка', 'Поиск', 'Тренировки 1.0', 'Тренировки 2.0', 'Тренировки 3.0', 'Тренировки 4.0', 'Тренировки 5.0', 'Яндекс WE Offer', 'Я.Бесплатный Курс Алгоритмы', 'Я.Практикум Алгоритмы 2020'];

// 2. Создаем массив asideDiv для элементов aside меню
const asideDiv = [];

// 3. Для каждой темы из массива asideThemes
for (const theme of asideThemes) {
  // 3.1 Создаем элемент elementAside
  const elementAside = document.createElement('a');
  elementAside.href = '#';
  elementAside.innerHTML = theme;

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

export const main = document.createElement('main');
main.classList.add('main');
main.id = 'al-theory';

pageLink(asideDiv);

export const aside = document.createElement('aside');
aside.classList.add('aside');
aside.append(...asideDiv);
