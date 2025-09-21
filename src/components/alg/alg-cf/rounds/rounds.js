/** *******************
Скрипт из файла rounds.js
Объект rounds содержит страницу alg-rounds
Функция showRounds показывает страницу rounds
******************** */
import './js/element-rounds';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект rounds
const rounds = {};

// 2. В объекте rounds создаем свойство aside
rounds.aside = createAside();

// 3. В объекте rounds создаем свойство main
rounds.main = createMain();

// 4. Экспортируем функцию showRounds()
export default function showRounds() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds.aside);
    mainAside.append(rounds.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
