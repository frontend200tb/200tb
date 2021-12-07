/*Добавим код для searchGoogle*/

/*Создадим переменную для searchGoogle*/
const searchG = document.getElementById('searchGoogle');

searchG.innerHTML = '<form action="https://www.google.com/search" method="get"> <input type="text" name="q" size="100"> <input type="submit" value="Search in google.com"> <input type="reset" value="Reset"> </form>';