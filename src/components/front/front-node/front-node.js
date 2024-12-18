/************************
Скрипт из файла front-node.js
Объект frontNode содержит страницу front-node
Функция showFrontNode показывает страницу front-node
************************/
import './js/element-front-node';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект frontNode
const frontNode = {};

// 2. В объекте frontNode создаем свойство aside
frontNode.aside = createAside();

// 3. В объекте frontNode создаем свойство main
frontNode.main = createMain();

// 4. Экспортируем функцию showFrontNode()
export default function showFrontNode() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(frontNode.aside);
    mainAside.append(frontNode.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
