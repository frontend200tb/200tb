/** **************
Функция contentOrder
****************** */
/*
Алгоритм работы
1. Для основного меню
  1.1 Выбираем все пункты меню с классом .content__menu-link
  1.2 Выбираем все содержимое с классом .content__item
  1.3 Переносим содержимое первого пункта наверх
2. Для вложенного меню
  2.1 Выбираем все пункты меню с классом .content1__menu-link
  2.2 Выбираем все содержимое с классом .content1__item
  2.3 Переносим содержимое первого пункта наверх
*/

export default function contentOrder() {
  // 1. Для основного меню
  // 1.1 Выбираем все пункты меню с классом .content__menu-link
  const menuLinks = document.querySelectorAll('.content__menu-link');

  // 1.2 Выбираем все содержимое с классом .content__item
  const contentItems = document.querySelectorAll('.content__item');

  // 1.3 Переносим содержимое первого пункта наверх
  let old = menuLinks[0];
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => addOrder(contentItems[i]));
  }

  /* Основная функция убирает class order -1 у старого элемента и добавляет новому */
  function addOrder(item) {
    old.classList.remove('content__order');
    item.classList.add('content__order');
    old = item;
  }
  /* конец Основная функция убирает class order -1 у старого элемента и добавляет новому */

  // 2. Для вложенного меню
  // 2.1 Выбираем все пункты меню с классом .content1__menu-link
  const menuLinks1 = document.querySelectorAll('.content1__menu-link');

  // 2.2 Выбираем все содержимое с классом .content1__item
  const contentItems1 = document.querySelectorAll('.content1__item');

  // 2.3 Переносим содержимое первого пункта наверх
  let old1 = menuLinks1[0];
  for (let i = 0; i < menuLinks1.length; i++) {
    menuLinks1[i].addEventListener('click', () => addOrder1(contentItems1[i]));
  }

  /* Основная функция убирает class order -1 у старого элемента и добавляет новому */
  function addOrder1(item) {
    old1.classList.remove('content1__order');
    item.classList.add('content1__order');
    old1 = item;
  }
  /* конец Основная функция убирает class order -1 у старого элемента и добавляет новому */
}
