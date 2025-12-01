/** *******************
Скрипт из файла alg-courses.js
Объект courses содержит страницу alg-courses
Функция showCourses показывает страницу alg-courses
******************** */
import './js/element-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект courses
const courses = {};

// 2. В объекте courses создаем свойство aside
courses.aside = createAside();

// 3. В объекте courses создаем свойство main
courses.main = createMain();

// 4. Экспортируем функцию showCourses()
export default function showCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(courses.aside);
    mainAside.append(courses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
