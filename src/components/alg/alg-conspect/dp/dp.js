/****************
Скрипт из файла dp.js
Объект dp содержит страницу conspect-dp
Функция showDp показывает страницу conspect-dp
*****************/
import './js/element-dp';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект dp
const dp = {};

// 2. В объекте dp создаем свойство aside
dp.aside = createAside();

// 3. В объекте dp создаем свойство main
dp.main = createMain();

// 4. Экспортируем функцию showDp()
export default function showDp() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(dp.aside);
    mainAside.append(dp.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
