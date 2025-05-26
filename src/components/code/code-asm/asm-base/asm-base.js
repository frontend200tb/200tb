/** *******************
Скрипт из файла asm-base.js
Объект asmBase содержит страницу asm-base
Функция showAsmBase показывает страницу asm-base
******************** */
import './js/element-asm-base';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект asmBase
const asmBase = {};

// 2. В объекте asmBase создаем свойство aside
asmBase.aside = createAside();

// 3. В объекте asmBase создаем свойство main
asmBase.main = createMain();

// 4. Экспортируем функцию showAsmBase()
export default function showAsmBase() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(asmBase.aside);
    mainAside.append(asmBase.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
