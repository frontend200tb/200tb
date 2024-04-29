/** **************
Скрипт из файла front-vacancy.js
Функция showFrontVacancy показывает страницу front-vacancy
****************** */
import './js/element-front-vacancy';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontVacancy
const frontVacancy = {};

// 2. В объекте frontVacancy создаем свойство aside
frontVacancy.aside = createAside();

// 3. В объекте frontVacancy создаем свойство main
frontVacancy.main = createMain();

// 4. Экспортируем функцию showFrontVacancy()
export default function showFrontVacancy() {
  const mainAside = document.querySelector('.main__aside');
  
  mainAside.innerHTML = '';
  mainAside.append(frontVacancy.aside);
  mainAside.append(frontVacancy.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
}
