/** *******************
Скрипт из файла asm-courses.js
Объект asmCourses содержит страницу asm-courses
Функция showAsmCourses показывает страницу asm-courses
******************** */
import './js/element-asm-courses';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект asmCourses
const asmCourses = {};

// 2. В объекте asmCourses создаем свойство aside
asmCourses.aside = createAside();

// 3. В объекте asmCourses создаем свойство main
asmCourses.main = createMain();

// 4. Экспортируем функцию showAsmCourses()
export default function showAsmCourses() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(asmCourses.aside);
    mainAside.append(asmCourses.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
