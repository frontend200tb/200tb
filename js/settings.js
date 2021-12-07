/*****************************
В div id="setColor" по нажатию на кнопки 
будет меняться цветовая схема страницы
*****************************/


/*Создадим переменную для div всей страницы*/
const page = document.getElementById('page');
const setColor = document.getElementById('setColor');


/*Удаляем имя класса с прошлым цветом и добавляем имя класса с новым цветом для page*/
const addPageColor = (color) => {
    page.classList.remove('page_green', 'page_yellow', 'page_blue', 'page_dodgerblue', 'page_red', 'page_brown', 'page_purple');
    page.classList.add(color);
}


/*обработаем нажатие на кнопку*/
selectGreen.addEventListener('click', () => addPageColor('page_green'));
selectYellow.addEventListener('click', () => addPageColor('page_yellow'));
selectBlue.addEventListener('click', () => addPageColor('page_blue'));
selectDodgerblue.addEventListener('click', () => addPageColor('page_dodgerblue'));
selectRed.addEventListener('click', () => addPageColor('page_red'));
selectBrown.addEventListener('click', () => addPageColor('page_brown'));
selectPurple.addEventListener('click', () => addPageColor('page_purple'));


/***********************
В div id="setSnow" по нажатию на Снег будет идти снег на странице
*****************************/

/*Создадим функции для изменения имен класса в элементе с id=page*/
const getSnow = () => {
    page.classList.contains('snow') ? page.classList.remove('snow') :
    page.classList.add('snow');
}

/*обработаем нажатие на кнопку*/
setSnow.addEventListener('click', getSnow);