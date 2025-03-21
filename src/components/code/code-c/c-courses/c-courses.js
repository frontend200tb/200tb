/** *******************
Скрипт из файла c-courses.js
Объект cCourses содержит страницу c-courses
Функция showCCourses показывает страницу c-courses
******************** */
import './js/element-c-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cCourses
const cCourses = {};

// 2. В объекте cCourses создаем свойство aside
cCourses.aside = createAside();

// 3. В объекте cCourses создаем свойство main
cCourses.main = createMain();

// 4. Экспортируем функцию showCCourses()
export default function showCCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cCourses.aside);
    mainAside.append(cCourses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
