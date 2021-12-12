/*****************************
В div id="setColor" по нажатию на кнопки 
будет меняться цветовая схема страницы
*****************************/


/*Создадим переменную для div всей страницы*/
const page = document.getElementById('page');
const setColor = document.getElementById('setColor');


/*Удаляем имя класса с прошлым цветом и добавляем имя класса с новым цветом для page*/
const addPageColor = (color) => {
    page.classList.remove('page_red', 'page_orange', 'page_yellow', 'page_green', 'page_dodgerblue', 'page_blue', 'page_purple', 'page_brown');
    page.classList.add(color);
}


/*обработаем нажатие на кнопку*/
selectRed.addEventListener('click', () => addPageColor('page_red'));
selectOrange.addEventListener('click', () => addPageColor('page_orange'));
selectYellow.addEventListener('click', () => addPageColor('page_yellow'));
selectGreen.addEventListener('click', () => addPageColor('page_green'));
selectDodgerblue.addEventListener('click', () => addPageColor('page_dodgerblue'));
selectBlue.addEventListener('click', () => addPageColor('page_blue'));
selectPurple.addEventListener('click', () => addPageColor('page_purple'));
selectBrown.addEventListener('click', () => addPageColor('page_brown'));


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