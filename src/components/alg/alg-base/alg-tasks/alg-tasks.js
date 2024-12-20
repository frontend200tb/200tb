/** *******************
Скрипт из файла alg-tasks.js
Объект algTasks содержит страницу alg-tasks
Функция showAlgTasks показывает страницу alg-tasks
******************** */
import './js/element-alg-tasks';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект algTasks
const algTasks = {};

// 2. В объекте algTasks создаем свойство aside
algTasks.aside = createAside();

// 3. В объекте algTasks создаем свойство main
algTasks.main = createMain();

// 4. Экспортируем функцию showAlgTasks()
export default function showAlgTasks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(algTasks.aside);
    mainAside.append(algTasks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
