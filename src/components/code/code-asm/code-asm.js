/** *******************
Скрипт из файла code-asm.js
Функция showCodeAsm показывает страницу code-asm
Навигация по теме Ассемблер
Основы Конспекты книг Конспекты курсов
******************** */
import './element-asm';
import {dataAsmNav} from './data-asm-nav';

// Создаем ссылки для меню mainnav
createMainNav(dataAsmNav);

function createMainNav(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      const asm = document.getElementById('asm');
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      asm.innerHTML = el.content;
      el.act();
    });
  });
}

function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function showCodeAsm() {
  const elemMainNav = document.getElementById('main-nav');
  elemMainNav.innerHTML = '';
  dataAsmNav.forEach((el) => {
    elemMainNav.appendChild(el.elem);
    el.elem.classList.remove('active');
  });
  // 6. Создадим и вызовем событие click на первом main-nav эелементе
  const eventClick = new Event('click');
  dataAsmNav[0].elem.dispatchEvent(eventClick);
}
