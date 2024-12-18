/************************
Скрипт из файла front-articles.js
Объект frontArticles содержит страницу front-articles
Функция showFrontArticles показывает страницу front-articles
************************/
import './js/element-front-articles';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontArticles
const frontArticles = {};

// 2. В объекте frontArticles создаем свойство aside
frontArticles.aside = createAside();

// 3. В объекте frontArticles создаем свойство main
frontArticles.main = createMain();

// 4. Экспортируем функцию showFrontArticles()
export default function showFrontArticles() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontArticles.aside);
    mainAside.append(frontArticles.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
