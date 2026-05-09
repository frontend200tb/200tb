/** *******************
Скрипт из файла cpp-javarush.js
Объект cppJavarush содержит страницу cpp-javarush
Функция showCppJavarush показывает страницу cpp-javarush
******************** */
import './js/element-cpp-javarush';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект cppJavarush
const cppJavarush = {};

// 2. В объекте cppJavarush создаем свойство aside
cppJavarush.aside = createAside();

// 3. В объекте cCourses создаем свойство main
cppJavarush.main = createMain();

// 4. Экспортируем функцию showCppJavarush()
export default function showCppJavarush() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(cppJavarush.aside);
    mainAside.append(cppJavarush.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
