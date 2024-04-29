/** **************
Скрипт из файла front-tools.js
Функция showFrontTools показывает страницу front-tools
****************** */
import './js/element-front-tools';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontNode
const frontNode = {};

// 2. В объекте frontNode создаем свойство aside
frontNode.aside = createAside();

// 3. В объекте frontNode создаем свойство main
frontNode.main = createMain();

// 4. Экспортируем функцию showFrontTools()
export default function showFrontTools() {
  const mainAside = document.querySelector('.main__aside');
  
  mainAside.innerHTML = '';
  mainAside.append(frontNode.aside);
  mainAside.append(frontNode.main);

  // 5. Создадим и вызовем событие click на первой ссылке aside элемента
  const eventClick = new Event('click');
  mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
}
