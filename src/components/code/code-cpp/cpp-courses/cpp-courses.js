/** *******************
Скрипт из файла cpp-courses.js
Объект cppCourses содержит страницу cpp-courses
Функция showCppCourses показывает страницу cpp-courses
******************** */
import './js/element-cpp-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cppCourses
const cppCourses = {};

// 2. В объекте cppCourses создаем свойство aside
cppCourses.aside = createAside();

// 3. В объекте cCourses создаем свойство main
cppCourses.main = createMain();

// 4. Экспортируем функцию showCppCourses()
export default function showCppCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cppCourses.aside);
    mainAside.append(cppCourses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
