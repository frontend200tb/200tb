/** *******************
Скрипт из файла silver.js
Объект silver содержит страницу alg-silver
Функция showSilver показывает страницу silver
******************** */
import './js/element-silver';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект silver
const silver = {};

// 2. В объекте silver создаем свойство aside
silver.aside = createAside();

// 3. В объекте silver создаем свойство main
silver.main = createMain();

// 4. Экспортируем функцию showSilver()
export default function showSilver() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(silver.aside);
    mainAside.append(silver.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
