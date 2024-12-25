/** *******************
Скрипт из файла kurs2.js
Объект kurs2 содержит страницу alg-kurs2
Функция showKurs2 показывает страницу kurs2
******************** */
import './js/element-kurs2';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект kurs2
const kurs2 = {};

// 2. В объекте kurs2 создаем свойство aside
kurs2.aside = createAside();

// 3. В объекте kurs2 создаем свойство main
kurs2.main = createMain();

// 4. Экспортируем функцию showKurs2()
export default function showKurs2() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(kurs2.aside);
    mainAside.append(kurs2.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
