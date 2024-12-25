/** *******************
Скрипт из файла stepik.js
Объект stepik содержит страницу alg-stepik
Функция showStepik показывает страницу stepik
******************** */
import './js/element-stepik';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект stepik
const stepik = {};

// 2. В объекте stepik создаем свойство aside
stepik.aside = createAside();

// 3. В объекте stepik создаем свойство main
stepik.main = createMain();

// 4. Экспортируем функцию showStepik()
export default function showStepik() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(stepik.aside);
    mainAside.append(stepik.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
