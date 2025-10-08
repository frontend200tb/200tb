/** *******************
Скрипт из файла misis.js
Объект misis содержит страницу alg-misis
Функция showMisis показывает страницу misis
******************** */
import './js/element-misis';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект misis
const misis = {};

// 2. В объекте misis создаем свойство aside
misis.aside = createAside();

// 3. В объекте misis создаем свойство main
misis.main = createMain();

// 4. Экспортируем функцию showMisis()
export default function showMisis() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(misis.aside);
    mainAside.append(misis.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
