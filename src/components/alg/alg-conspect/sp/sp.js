/****************
Скрипт из файла sp.js
Объект sp содержит страницу conspect-sp
Функция showSp показывает страницу conspect-sp
*****************/
import './js/element-sp';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект sp
const sp = {};

// 2. В объекте sp создаем свойство aside
sp.aside = createAside();

// 3. В объекте sp создаем свойство main
sp.main = createMain();

// 4. Экспортируем функцию showSp()
export default function showSp() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(sp.aside);
    mainAside.append(sp.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
