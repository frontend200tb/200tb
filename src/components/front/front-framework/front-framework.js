/************************
Скрипт из файла front-framework.js
Объект frontFramework содержит страницу front-framework
Функция showFrontFramework показывает страницу front-framework
************************/
import './js/element-front-framework';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontFramework
const frontFramework = {};

// 2. В объекте frontFramework создаем свойство aside
frontFramework.aside = createAside();

// 3. В объекте frontFramework создаем свойство main
frontFramework.main = createMain();

// 4. Экспортируем функцию showFrontFramework()
export default function showFrontFramework() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontFramework.aside);
    mainAside.append(frontFramework.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
