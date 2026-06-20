/** *******************
Скрипт из файла web-javarush.js
Объект webJavarush содержит страницу web-javarush
Функция showWebJavarush показывает страницу web-javarush
******************** */
import './js/element-web-javarush';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект webJavarush
const webJavarush = {};

// 2. В объекте webJavarush создаем свойство aside
webJavarush.aside = createAside();

// 3. В объекте cCourses создаем свойство main
webJavarush.main = createMain();

// 4. Экспортируем функцию showWebJavarush()
export default function showWebJavarush() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(webJavarush.aside);
    mainAside.append(webJavarush.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
