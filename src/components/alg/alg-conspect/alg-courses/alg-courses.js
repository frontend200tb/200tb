/** *******************
Скрипт из файла alg-courses.js
Объект algCourses содержит страницу alg-courses
Функция showAlgCourses показывает страницу alg-courses
******************** */
import './js/element-alg-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект algCourses
const algCourses = {};

// 2. В объекте algCourses создаем свойство aside
algCourses.aside = createAside();

// 3. В объекте algCourses создаем свойство main
algCourses.main = createMain();

// 4. Экспортируем функцию showAlgCourses()
export default function showAlgCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(algCourses.aside);
    mainAside.append(algCourses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
