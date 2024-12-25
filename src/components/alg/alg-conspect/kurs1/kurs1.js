/** *******************
Скрипт из файла kurs1.js
Объект kurs1 содержит страницу alg-kurs1
Функция showKurs1 показывает страницу kurs1
******************** */
import './js/element-kurs1';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект kurs1
const kurs1 = {};

// 2. В объекте kurs1 создаем свойство aside
kurs1.aside = createAside();

// 3. В объекте kurs1 создаем свойство main
kurs1.main = createMain();

// 4. Экспортируем функцию showKurs1()
export default function showKurs1() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(kurs1.aside);
    mainAside.append(kurs1.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
