/** *******************
Скрипт из файла coderun.js
Объект coderun содержит страницу alg-coderun
Функция showCoderun показывает страницу coderun
******************** */
import './js/element-coderun';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект coderun
const coderun = {};

// 2. В объекте coderun создаем свойство aside
coderun.aside = createAside();

// 3. В объекте coderun создаем свойство main
coderun.main = createMain();

// 4. Экспортируем функцию showCoderun()
export default function showCoderun() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(coderun.aside);
    mainAside.append(coderun.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
