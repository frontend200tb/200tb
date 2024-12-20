/** *******************
Скрипт из файла fatin.js
Объект fatin содержит страницу alg-fatin
Функция showFatin показывает страницу fatin
******************** */
import './js/element-fatin';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект fatin
const fatin = {};

// 2. В объекте fatin создаем свойство aside
fatin.aside = createAside();

// 3. В объекте fatin создаем свойство main
fatin.main = createMain();

// 4. Экспортируем функцию showFatin()
export default function showFatin() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(fatin.aside);
    mainAside.append(fatin.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
