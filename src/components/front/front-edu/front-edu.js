/************************
Скрипт из файла front-edu.js
Объект frontEdu содержит страницу front-edu
Функция showFrontEdu показывает страницу front-edu
************************/
import './scss/border.scss';
import './js/element-front-edu';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontEdu
const frontEdu = {};

// 2. В объекте frontEdu создаем свойство aside
frontEdu.aside = createAside();

// 3. В объекте frontEdu создаем свойство main
frontEdu.main = createMain();

// 4. Экспортируем функцию showFrontEdu()
export default function showFrontEdu() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontEdu.aside);
    mainAside.append(frontEdu.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
