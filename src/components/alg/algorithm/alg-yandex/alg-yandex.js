/****************
Скрипт из файла alg-yandex.js
Функция showAlgYandex показывает страницу alg-yandex
*****************/
import './js/element-alg-yandex';
import { aside, main } from './js/f-create-aside';

// 1. Создаем объект algYandex
const algYandex = {};

// 2. В объекте algYandex создаем свойство aside
algYandex.aside = aside;

// 3. В объекте algYandex создаем свойство main
algYandex.main = main;

// 4. Экспортируем функцию showAlgYandex()
export default function showAlgYandex() {
  const algYandexElement = document.querySelector('.alg-yandex');
  const mainAside = algYandexElement.querySelector('.main__aside');
  mainAside.innerHTML = '';
  mainAside.append(algYandex.aside);
  mainAside.append(algYandex.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  algYandex.aside.firstElementChild.dispatchEvent(eventClick);
}
