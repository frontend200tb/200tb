/** *******************
Скрипт из файла js-courses.js
Объект jsCourses содержит страницу js-courses
Функция showJsCourses показывает страницу js-courses
******************** */
import './js/element-js-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект jsCourses
const jsCourses = {};

// 2. В объекте jsCourses создаем свойство aside
jsCourses.aside = createAside();

// 3. В объекте jsCourses создаем свойство main
jsCourses.main = createMain();

// 4. Экспортируем функцию showJsCourses()
export default function showJsCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(jsCourses.aside);
    mainAside.append(jsCourses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
