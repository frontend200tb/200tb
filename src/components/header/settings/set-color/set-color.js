/** **************
Скрипт из файла set-color.js
****************** */

/** ***************************
В div id="set-color" по нажатию на кнопки
будет меняться цветовая схема страницы
**************************** */

const page = document.querySelector('#page');
const stick = document.querySelector('.header-fixed');

class SetColor extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="set-color" class="set-color">
      <button id="select-red"></button>
      <button id="select-sand"></button>
      <button id="select-yellow"></button>
      <button id="select-olive"></button>
      <button id="select-green"></button>
      <button id="select-dodgerblue"></button>
      <button id="select-blue"></button>
      <button id="select-brown"></button>
      <button id="select-silver"></button>
    </div>
    `;
  }
}

customElements.define('set-color', SetColor);

const selectRed = document.querySelector('#select-red');
const selectSand = document.querySelector('#select-sand');
const selectYellow = document.querySelector('#select-yellow');
const selectOlive = document.querySelector('#select-olive');
const selectGreen = document.querySelector('#select-green');
const selectDodgerblue = document.querySelector('#select-dodgerblue');
const selectBlue = document.querySelector('#select-blue');
const selectBrown = document.querySelector('#select-brown');
const selectSilver = document.querySelector('#select-silver');

/* Удаляем имя класса с прошлым цветом и добавляем имя класса с новым цветом для page */
const addPageColor = (color) => {
  page.classList.remove('page_red', 'page_sand', 'page_yellow', 'page_olive', 'page_green', 'page_dodgerblue', 'page_blue', 'page_brown', 'page_silver');
  stick.classList.remove('page_red', 'page_sand', 'page_yellow', 'page_olive', 'page_green', 'page_dodgerblue', 'page_blue', 'page_brown', 'page_silver');
  page.classList.add(color);
  stick.classList.add(color);
};

/* обработаем нажатие на кнопку */
selectRed.addEventListener('click', () => addPageColor('page_red'));
selectSand.addEventListener('click', () => addPageColor('page_sand'));
selectYellow.addEventListener('click', () => addPageColor('page_yellow'));
selectOlive.addEventListener('click', () => addPageColor('page_olive'));
selectGreen.addEventListener('click', () => addPageColor('page_green'));
selectDodgerblue.addEventListener('click', () => addPageColor('page_dodgerblue'));
selectBlue.addEventListener('click', () => addPageColor('page_blue'));
selectBrown.addEventListener('click', () => addPageColor('page_brown'));
selectSilver.addEventListener('click', () => addPageColor('page_silver'));
