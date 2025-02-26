/** *******************
Скрипт из файла code-ref.js
Объект codeRef содержит страницу code-ref
Функция showCodeRef показывает страницу code-ref
******************** */
import './js/element-code-ref';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeRef
const codeRef = {};

// 2. В объекте codeRef создаем свойство aside
codeRef.aside = createAside();

// 3. В объекте codeRef создаем свойство main
codeRef.main = createMain();

// 4. Экспортируем функцию showCodeRef()
export default function showCodeRef() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeRef.aside);
    mainAside.append(codeRef.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
