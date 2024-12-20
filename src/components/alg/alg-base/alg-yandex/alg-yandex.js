/****************
Скрипт из файла alg-yandex.js
Объект algYandex содержит страницу alg-yandex
Функция showAlgYandex показывает страницу alg-yandex
*****************/
import './js/element-alg-yandex';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект algYandex
const algYandex = {};

// 2. В объекте algYandex создаем свойство aside
algYandex.aside = createAside();

// 3. В объекте algYandex создаем свойство main
algYandex.main = createMain();

// 4. Экспортируем функцию showAlgYandex()
export default function showAlgYandex() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(algYandex.aside);
    mainAside.append(algYandex.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
