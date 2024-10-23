/** ***************
Функция createElements принимает объект category, создает и возвращает массив elements
**************** */
/*
Алгоритм работы
*/

import createList from './f-create-list';

export default function createElements(data) {
  // временные переменные для хранения контента, который появится на странице
  const aside = document.createElement('aside');
  aside.className = 'aside';

  const main = document.createElement('main');
  main.className = 'list';

  const h2Element = document.createElement('h2');
  const ulElement = document.createElement('ul');
  ulElement.innerHTML = `
  <li><a href="https://ru.savefrom.net/">savefrom.net</a> Скачать mp4 видео</li>
  <li><a href="https://downsub.com/lang/ru">downsub.com</a> Скачать srt субтитры</li>
  <li><a href="https://mp3y.download/ru/309/mp3-converter">mp3y.download</a> Скачать mp3 аудио</li>
  `;
  const currentContent = document.createElement('ol');
  currentContent.id = 'youtube';

  // 1. Создаем объект для main-nav, aside и main
  const elements = {};

  // 2. Создаем main-nav
  // 2.1 Создаем массив navDiv для элементов main-nav
  const navDiv = [];

  for (const category in data) {
    // 2.2 Создаем элемент elementNav для каждой категории
    const elementNav = document.createElement('a');
    elementNav.href = '#';
    elementNav.innerHTML = category;

    // 2.3 Добавляем элемент elementNav в массив navDiv
    navDiv.push(elementNav);

    // 3. Создаем aside меню
    // 3.1 Создаем массив asideDiv для элементов aside меню
    const asideDiv = [];

    // 3. Создадим первый элемент firstLi меню со всеми видео
    const firstLi = document.createElement('a');
    firstLi.href = '#';
    firstLi.innerHTML = 'all';
    const show = [].concat(...data[category]);
    const firstChannelsList = createList(show);

    // 4. По клику на первый элемент firstLi
    firstLi.addEventListener('click', (e) => {
      e.preventDefault();

      // 4.1 добавим ему class="active"
      classActive(asideDiv, firstLi);

      // 4.2 выведем список всех видео
      currentContent.innerHTML = '';
      currentContent.append(...firstChannelsList);

      // 4.3 добавим тему в заголовок h2Element
      h2Element.innerHTML = show[0].theme;
    });

    // 5. Добавляем элемент firstLi в массив asideDiv для элементов меню aside
    asideDiv.push(firstLi);

    // 6. Создадим массив channels2 для массивов по 20 элементов
    const channels2 = [];
    let j = 0;
    for (let i = 0; i < data[category].length; i += 20) {
      channels2[j] = data[category].slice(i, i + 20);

      // 7. Создадим элемент asideLi меню aside с 20 видео
      const asideLi = document.createElement('a');
      asideLi.href = '#';
      asideLi.innerHTML = `${channels2[j][0].theme} ${j + 1}`;
      const show = channels2[j];
      const overChannelsList = createList(show);

      // 8. По клику на элемент asideLi
      asideLi.addEventListener('click', (e) => {
        e.preventDefault();

        // 8.1 добавим ему class="active"
        classActive(asideDiv, asideLi);

        // 8.2 выведем список всех видео
        currentContent.innerHTML = '';
        currentContent.append(...overChannelsList);

        // 8.3 добавим тему в заголовок h2Element
        h2Element.innerHTML = asideLi.innerHTML;
      });

      // 9. Добавляем элемент asideLi в массив parentDiv для элементов меню aside
      asideDiv.push(asideLi);

      j++;
    }

    // 3.4 По клику на элемент main-nav
    elementNav.addEventListener('click', (e) => {
      e.preventDefault();

      // 3.4.1 добавим ему class="active"
      classActive(navDiv, elementNav);

      // 3.4.2 показываем нужный aside
      aside.innerHTML = '';
      aside.append(...asideDiv);

      // 3.4.3 Создадим и вызовем событие click на первом aside элементе
      const eventClick = new Event('click');
      asideDiv[0].dispatchEvent(eventClick);
    });
  }

  // Ставим class="active" выбранному элементу меню и убираем с остальных
  function classActive(elementOl, elementLi) {
    elementOl.forEach((li) => {
      li.classList.remove('active');
    });
    elementLi.classList.add('active');
  }

  main.append(ulElement, h2Element, currentContent);

  elements.navDiv = navDiv;
  elements.aside = aside;
  elements.main = main;

  return elements;
}
