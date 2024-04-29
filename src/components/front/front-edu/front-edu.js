/** **************
Скрипт из файла front-edu.js
Функция showFrontEdu показывает страницу front-edu
****************** */
import './js/element-front-edu';
import html from './pages/elem-edu.html';
import {createAside, createMain, removeClassActive} from './js/f-create-aside';

// 1. Создаем объект frontEdu
const frontEdu = {};

// 2. В объекте frontEdu создаем свойство aside
frontEdu.aside = createAside();

// 3. В объекте frontEdu создаем свойство main
frontEdu.main = createMain();

// 4. Экспортируем функцию showFrontEdu()
export default function showFrontEdu() {
  const mainAside = document.querySelector('.main__aside');

  frontEdu.main.innerHTML = html;
  mainAside.innerHTML = '';
  mainAside.append(frontEdu.aside);
  mainAside.append(frontEdu.main);
  removeClassActive();
}
