/** *******************
Скрипт из файла code-asm.js
Объект codeAsm содержит страницу code-asm
Функция showCodeAsm показывает страницу code-asm
******************** */
import './js/element-code-asm';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект codeAsm
const codeAsm = {};

// 2. В объекте codeAsm создаем свойство aside
codeAsm.aside = createAside();

// 3. В объекте codeAsm создаем свойство main
codeAsm.main = createMain();

// 4. Экспортируем функцию showCodeAsm()
export default function showCodeAsm() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(codeAsm.aside);
    mainAside.append(codeAsm.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
