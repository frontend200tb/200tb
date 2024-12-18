/************************
Скрипт из файла front-learned.js
Объект frontLearned содержит страницу front-learned
Функция showFrontLearned показывает страницу front-learned
************************/
import './js/element-front-learned';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontLearned
const frontLearned = {};

// 2. В объекте frontLearned создаем свойство aside
frontLearned.aside = createAside();

// 3. В объекте frontLearned создаем свойство main
frontLearned.main = createMain();

// 4. Экспортируем функцию showFrontLearned()
export default function showFrontLearned() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontLearned.aside);
    mainAside.append(frontLearned.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
