/****************
Скрипт написан для
header > header__first-row > nav
навигация по сайту
news lang frontend
*******************/

/****************
Создадим ссылки в меню nav для страниц news
*****************/

/*Создадим переменную для nav страниц news*/
if (document.getElementById('news_nav')) {
    const newsNav = document.getElementById('news_nav');

    /*Создадим переменные для ссылок в меню nav на странице news*/
    const aAuto = document.createElement('a');
        aAuto.href = 'auto.html';
        aAuto.innerHTML='Auto';
    const aBooks = document.createElement('a');
        aBooks.href = 'books.html';
        aBooks.innerHTML='Books';
    const aMail = document.createElement('a');
        aMail.href = 'mail.html';
        aMail.innerHTML='Mail';
    const aPowerlifting = document.createElement('a');
        aPowerlifting.href = 'powerlift.html';
        aPowerlifting.innerHTML='Powerlifting';
    const aShops = document.createElement('a');
        aShops.href = 'shops.html';
        aShops.innerHTML='Shops';

    /*Добавим класс active для текущей страницы*/
    if(newsNav.classList.contains('auto'))
        aAuto.classList.add('active');
    if(newsNav.classList.contains('books'))
        aBooks.classList.add('active');
    if(newsNav.classList.contains('mail'))
        aMail.classList.add('active');
    if(newsNav.classList.contains('powerlifting'))
        aPowerlifting.classList.add('active');
    if(newsNav.classList.contains('shops'))
        aShops.classList.add('active');

    /*Добавим ссылки меню news в навигацию nav*/
    newsNav.appendChild(aAuto);
    newsNav.appendChild(aBooks);
    newsNav.appendChild(aMail);
    newsNav.appendChild(aPowerlifting);
    newsNav.appendChild(aShops);

}


/****************
Создадим ссылки в меню nav для страниц lang
*****************/

/*Создадим переменную для nav страниц lang*/
if (document.getElementById('lang_nav')) {
    const langNav = document.getElementById('lang_nav');

    /*Создадим переменные для ссылок в меню nav на странице lang*/
    const aRadio = document.createElement('a');
        aRadio.href = 'radio.html';
        aRadio.innerHTML='Radio';
    const aSerbia = document.createElement('a');
        aSerbia.href = 'serbia.html';
        aSerbia.innerHTML='Serbia';
    const aVostok = document.createElement('a');
        aVostok.href = 'vostok.html';
        aVostok.innerHTML='Vostok';

    /*Добавим класс active для текущей страницы*/
    if(langNav.classList.contains('radio'))
        aRadio.classList.add('active');
    if(langNav.classList.contains('serbia'))
        aSerbia.classList.add('active');
    if(langNav.classList.contains('vostok'))
        aVostok.classList.add('active');

    /*Добавим ссылки меню lang в навигацию nav*/
    langNav.appendChild(aRadio);
    langNav.appendChild(aSerbia);
    langNav.appendChild(aVostok);

}


/****************
Создадим ссылки в меню nav для страниц frontend
*****************/

/*Создадим переменную для nav страниц frontend*/
if (document.getElementById('frontend_nav')) {
    const frontendNav = document.getElementById('frontend_nav');

    /*Создадим переменные для ссылок в меню nav на странице frontend*/
    const aBooks = document.createElement('a');
        aBooks.href = 'books/books.html';
        aBooks.innerHTML='Books';
    const aLearned = document.createElement('a');
        aLearned.href = 'learned/learned.html';
        aLearned.innerHTML='Learned';
    const aOffline = document.createElement('a');
        aOffline.href = 'offline/offline.html';
        aOffline.innerHTML='Offline';
    const aOnline = document.createElement('a');
        aOnline.href = 'online/online.html';
        aOnline.innerHTML='Online';
    const aPrograms = document.createElement('a');
        aPrograms.href = 'programs.html';
        aPrograms.innerHTML='Programs';
    const aTools = document.createElement('a');
        aTools.href = 'tools/tools.html';
        aTools.innerHTML='Tools';
    const aVideo = document.createElement('a');
        aVideo.href = 'video/video.html';
        aVideo.innerHTML='Video';
    const aYoutube = document.createElement('a');
        aYoutube.href = 'youtube/yt1.html';
        aYoutube.innerHTML='Youtube';

    /*Добавим класс active для текущей страницы*/
    if(frontendNav.classList.contains('books'))
        aBooks.classList.add('active');
    if(frontendNav.classList.contains('learned'))
        aLearned.classList.add('active');
    if(frontendNav.classList.contains('offline'))
        aOffline.classList.add('active');
    if(frontendNav.classList.contains('online'))
        aOnline.classList.add('active');
    if(frontendNav.classList.contains('programs'))
        aPrograms.classList.add('active');
    if(frontendNav.classList.contains('tools'))
        aTools.classList.add('active');
    if(frontendNav.classList.contains('video'))
        aVideo.classList.add('active');
    if(frontendNav.classList.contains('youtube'))
        aYoutube.classList.add('active');

    /*Добавим ссылки меню frontend в навигацию nav*/
    frontendNav.appendChild(aBooks);
    frontendNav.appendChild(aLearned);
    frontendNav.appendChild(aOffline);
    frontendNav.appendChild(aOnline);
    frontendNav.appendChild(aPrograms);
    frontendNav.appendChild(aTools);
    frontendNav.appendChild(aVideo);
    frontendNav.appendChild(aYoutube);

}
/****************
Скрипт написан для
main.content
По нажатию на пункт меню в секции content
Переносит содержимое этого пункта наверх
*******************/


/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/
function addOrder(item){
    console.log(item);
    old.classList.remove('content__order');
    item.classList.add('content__order');
    console.log(item);
    old = item;
}
/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/


/**************Content*/

if (document.getElementById('content__menu-link1') &&
    document.getElementById('content__item1')) {
    var old = document.getElementById('content__menu-link1');
    const menu_link1 = document.getElementById('content__menu-link1');
    const item1 = document.getElementById('content__item1');
    menu_link1.addEventListener('click', () => addOrder(item1));
}

if (document.getElementById('content__menu-link2') &&
    document.getElementById('content__item2')) {
    const menu_link2 = document.getElementById('content__menu-link2');
    const item2 = document.getElementById('content__item2');
    menu_link2.addEventListener('click', () => addOrder(item2));
}

if (document.getElementById('content__menu-link3') &&
    document.getElementById('content__item3')) {
    const menu_link3 = document.getElementById('content__menu-link3');
    const item3 = document.getElementById('content__item3');
    menu_link3.addEventListener('click', () => addOrder(item3));
}

if (document.getElementById('content__menu-link4') &&
    document.getElementById('content__item4')) {
    const menu_link4 = document.getElementById('content__menu-link4');
    const item4 = document.getElementById('content__item4');
    menu_link4.addEventListener('click', () => addOrder(item4));
}

if (document.getElementById('content__menu-link5') &&
    document.getElementById('content__item5')) {
    const menu_link5 = document.getElementById('content__menu-link5');
    const item5 = document.getElementById('content__item5');
    menu_link5.addEventListener('click', () => addOrder(item5));
}

if (document.getElementById('content__menu-link6') &&
    document.getElementById('content__item6')) {
    const menu_link6 = document.getElementById('content__menu-link6');
    const item6 = document.getElementById('content__item6');
    menu_link6.addEventListener('click', () => addOrder(item6));
}

if (document.getElementById('content__menu-link7') &&
    document.getElementById('content__item7')) {
    const menu_link7 = document.getElementById('content__menu-link7');
    const item7 = document.getElementById('content__item7');
    menu_link7.addEventListener('click', () => addOrder(item7));
}

if (document.getElementById('content__menu-link8') &&
    document.getElementById('content__item8')) {
    const menu_link8 = document.getElementById('content__menu-link8');
    const item8 = document.getElementById('content__item8');
    menu_link8.addEventListener('click', () => addOrder(item8));
}

if (document.getElementById('content__menu-link9') &&
    document.getElementById('content__item9')) {
    const menu_link9 = document.getElementById('content__menu-link9');
    const item9 = document.getElementById('content__item9');
    menu_link9.addEventListener('click', () => addOrder(item9));
}

if (document.getElementById('content__menu-link10') &&
    document.getElementById('content__item10')) {
    const menu_link10 = document.getElementById('content__menu-link10');
    const item10 = document.getElementById('content__item10');
    menu_link10.addEventListener('click', () => addOrder(item10));
}

if (document.getElementById('content__menu-link11') &&
    document.getElementById('content__item11')) {
    const menu_link11 = document.getElementById('content__menu-link11');
    const item11 = document.getElementById('content__item11');
    menu_link11.addEventListener('click', () => addOrder(item11));
}

if (document.getElementById('content__menu-link12') &&
    document.getElementById('content__item12')) {
    const menu_link12 = document.getElementById('content__menu-link12');
    const item12 = document.getElementById('content__item12');
    menu_link12.addEventListener('click', () => addOrder(item12));
}

/*************Content*/
/****************
Скрипт появления формы поиска по нажатию на иконку лупы
****************/

/* Если есть иконка лупы и есть форма поиска,
то по нажатию на иконку лупы показывать/скрывать
форму поиска */

if (document.getElementById('setSearch') && document.getElementById('searchGoogle')) {
  function clickSetSearch() {
    searchG.classList.toggle('show');
  }

  const setSearch = document.getElementById('setSearch');
  const searchG = document.getElementById('searchGoogle');
  setSearch.addEventListener('click', clickSetSearch);
}


/* Код формы поиска

if (document.getElementById('searchGoogle')) {
  const searchG = document.getElementById('searchGoogle');
  searchG.innerHTML = '<form action="https://www.google.com/search" method="get"> <input type="text" name="q" size="100"> <input type="submit" value="Search in google.com"> <input type="reset" value="Reset"> </form>'; 
}
*/
/****************
Скрипт написан для
header > header__second-row > settings
выбор цвета, снег, день ночь
*******************/

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
/****************
Скрипт написан для
article class="shohide"
По нажатию на заголовок class="shohide__h"
Показывает/скрывает содержимое class="showhide__text"
*******************/


/*Основная функция скрывает и показывает переданный ей элемент class="showhide__text"*/
const showHide = (item) => {
    item.style.display == 'none' ? item.style.display = 'block' : item.style.display = 'none';
}

/**************Settings*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('set') &&
    document.getElementById('set__item')) {
    const set = document.getElementById('set');
    const setItem = document.getElementById('set__item');

    /*Скроем содержимое*/
    setItem.style.display = 'none';
    /*По нажатию на кнопку Settings появятся Настройки*/
        set.addEventListener('click', () => showHide(setItem));
}
/**************Settings*/


/**************Code Editor*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('code_editor') &&
    document.getElementById('code_editor_item')) {
    const codeEditor = document.getElementById('code_editor');
    const codeEditorItem = document.getElementById('code_editor_item');

    /*Скроем содержимое*/
    codeEditorItem.style.display = 'none';
    codeEditor.addEventListener('click', () => showHide(codeEditorItem));
}
/*************Code Editor*/


/**************Fonts*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('fonts') &&
    document.getElementById('fonts_item')) {
    const fonts = document.getElementById('fonts');
    const fontsItem = document.getElementById('fonts_item');

    /*Скроем содержимое*/
    fontsItem.style.display = 'none';
    fonts.addEventListener('click', () => showHide(fontsItem));
}
/*************Fonts*/


/**************font-icon*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('font-icon') &&
    document.getElementById('font-icon_item')) {
    const fonts = document.getElementById('font-icon');
    const fontsItem = document.getElementById('font-icon_item');

    /*Скроем содержимое*/
    fontsItem.style.display = 'none';
    fonts.addEventListener('click', () => showHide(fontsItem));
}
/*************font-icon*/


/**************Icons*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('icons') &&
    document.getElementById('icons_item')) {
    const icons = document.getElementById('icons');
    const iconsItem = document.getElementById('icons_item');

    /*Скроем содержимое*/
    iconsItem.style.display = 'none';
    icons.addEventListener('click', () => showHide(iconsItem));
}
/*************Icons*/


/**************Color*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('color') &&
    document.getElementById('color_item')) {
    const color = document.getElementById('color');
    const colorItem = document.getElementById('color_item');

    /*Скроем содержимое*/
    colorItem.style.display = 'none';
    color.addEventListener('click', () => showHide(colorItem));
}
/*************Color*/


/**************eng*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('eng') && 
    document.getElementById('eng_item')) {
    const eng = document.getElementById('eng');
    const engItem = document.getElementById('eng_item');

    /*Скроем содержимое*/
    engItem.style.display = 'none';
    eng.addEventListener('click', () => showHide(engItem));
}
/*************eng*/


/**************hide1*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide1') && 
    document.getElementById('hide1_item')) {
    const hide1 = document.getElementById('hide1');
    const hide1Item = document.getElementById('hide1_item');

    /*Скроем содержимое*/
    hide1Item.style.display = 'none';
    hide1.addEventListener('click', () => showHide(hide1Item));
}
/*************hide1*/


/**************hide2*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide2') && 
    document.getElementById('hide2_item')) {
    const hide2 = document.getElementById('hide2');
    const hide2Item = document.getElementById('hide2_item');

    /*Скроем содержимое*/
    hide2Item.style.display = 'none';
    hide2.addEventListener('click', () => showHide(hide2Item));
}
/*************hide2*/


/**************hide3*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide3') && 
    document.getElementById('hide3_item')) {
    const hide3 = document.getElementById('hide3');
    const hide3Item = document.getElementById('hide3_item');

    /*Скроем содержимое*/
    hide3Item.style.display = 'none';
    hide3.addEventListener('click', () => showHide(hide3Item));
}
/*************hide3*/


/**************hide4*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide4') && 
    document.getElementById('hide4_item')) {
    const hide4 = document.getElementById('hide4');
    const hide4Item = document.getElementById('hide4_item');

    /*Скроем содержимое*/
    hide4Item.style.display = 'none';
    hide4.addEventListener('click', () => showHide(hide4Item));
}
/*************hide4*/


/**************hide5*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide5') && 
    document.getElementById('hide5_item')) {
    const hide5 = document.getElementById('hide5');
    const hide5Item = document.getElementById('hide5_item');

    /*Скроем содержимое*/
    hide5Item.style.display = 'none';
    hide5.addEventListener('click', () => showHide(hide5Item));
}
/*************hide5*/


/**************hide6*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide6') && 
    document.getElementById('hide6_item')) {
    const hide6 = document.getElementById('hide6');
    const hide6Item = document.getElementById('hide6_item');

    /*Скроем содержимое*/
    hide6Item.style.display = 'none';
    hide6.addEventListener('click', () => showHide(hide6Item));
}
/*************hide6*/


/**************hide7*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide7') && 
    document.getElementById('hide7_item')) {
    const hide7 = document.getElementById('hide7');
    const hide7Item = document.getElementById('hide7_item');

    /*Скроем содержимое*/
    hide7Item.style.display = 'none';
    hide7.addEventListener('click', () => showHide(hide7Item));
}
/*************hide7*/


/**************hide8*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide8') && 
    document.getElementById('hide8_item')) {
    const hide8 = document.getElementById('hide8');
    const hide8Item = document.getElementById('hide8_item');

    /*Скроем содержимое*/
    hide8Item.style.display = 'none';
    hide8.addEventListener('click', () => showHide(hide8Item));
}
/*************hide8*/


/**************hide9*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide9') && 
    document.getElementById('hide9_item')) {
    const hide9 = document.getElementById('hide9');
    const hide9Item = document.getElementById('hide9_item');

    /*Скроем содержимое*/
    hide9Item.style.display = 'none';
    hide9.addEventListener('click', () => showHide(hide9Item));
}
/*************hide9*/


/**************hide10*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide10') && 
    document.getElementById('hide10_item')) {
    const hide10 = document.getElementById('hide10');
    const hide10Item = document.getElementById('hide10_item');

    /*Скроем содержимое*/
    hide10Item.style.display = 'none';
    hide10.addEventListener('click', () => showHide(hide10Item));
}
/*************hide10*/


/**************hide11*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide11') && 
    document.getElementById('hide11_item')) {
    const hide11 = document.getElementById('hide11');
    const hide11Item = document.getElementById('hide11_item');

    /*Скроем содержимое*/
    hide11Item.style.display = 'none';
    hide11.addEventListener('click', () => showHide(hide11Item));
}
/*************hide11*/


/**************hide12*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide12') && 
    document.getElementById('hide12_item')) {
    const hide12 = document.getElementById('hide12');
    const hide12Item = document.getElementById('hide12_item');

    /*Скроем содержимое*/
    hide12Item.style.display = 'none';
    hide12.addEventListener('click', () => showHide(hide12Item));
}
/*************hide12*/


/**************hide13*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide13') && 
    document.getElementById('hide13_item')) {
    const hide13 = document.getElementById('hide13');
    const hide13Item = document.getElementById('hide13_item');

    /*Скроем содержимое*/
    hide13Item.style.display = 'none';
    hide13.addEventListener('click', () => showHide(hide13Item));
}
/*************hide13*/


/**************hide14*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide14') && 
    document.getElementById('hide14_item')) {
    const hide14 = document.getElementById('hide14');
    const hide14Item = document.getElementById('hide14_item');

    /*Скроем содержимое*/
    hide14Item.style.display = 'none';
    hide14.addEventListener('click', () => showHide(hide14Item));
}
/*************hide14*/


/**************hide15*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide15') && 
    document.getElementById('hide15_item')) {
    const hide15 = document.getElementById('hide15');
    const hide15Item = document.getElementById('hide15_item');

    /*Скроем содержимое*/
    hide15Item.style.display = 'none';
    hide15.addEventListener('click', () => showHide(hide15Item));
}
/*************hide15*/


/**************hide16*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide16') && 
    document.getElementById('hide16_item')) {
    const hide16 = document.getElementById('hide16');
    const hide16Item = document.getElementById('hide16_item');

    /*Скроем содержимое*/
    hide16Item.style.display = 'none';
    hide16.addEventListener('click', () => showHide(hide16Item));
}
/*************hide16*/


/**************hide17*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('hide17') && 
    document.getElementById('hide17_item')) {
    const hide17 = document.getElementById('hide17');
    const hide17Item = document.getElementById('hide17_item');

    /*Скроем содержимое*/
    hide17Item.style.display = 'none';
    hide17.addEventListener('click', () => showHide(hide17Item));
}
/*************hide17*/


/*Скрипт для страницы links.html
Показатывает и скрывает элементы по нажатию на заголовок*/


/*Скрывает и показывает переданный ей элемент*/
function toggleNoneBlock(item){
    item.style.display == 'none' ? item.style.display = 'block' : item.style.display = 'none';
}


/**************Изучение Frontend*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('links_front') &&
    document.getElementById('links_front_item')) {
    const linksFront = document.getElementById('links_front');
    const linksFrontItem = document.getElementById('links_front_item');

    /*Скроем содержимое*/
    linksFrontItem.style.display = 'none';
    linksFront.addEventListener('click', () => toggleNoneBlock(linksFrontItem));
}
/*************Изучение Frontend*/


/**************Вакансии*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('job') &&
    document.getElementById('job_item')) {
    const job = document.getElementById('job');
    const jobItem = document.getElementById('job_item');

    /*Скроем содержимое*/
    jobItem.style.display = 'none';
    job.addEventListener('click', () => toggleNoneBlock(jobItem));
}
/*************Вакансии*/


/**************Freelance*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('freelance') &&
    document.getElementById('freelance_item')) {
    const freelance = document.getElementById('freelance');
    const freelanceItem = document.getElementById('freelance_item');

    /*Скроем содержимое*/
    freelanceItem.style.display = 'none';
    freelance.addEventListener('click', () => toggleNoneBlock(freelanceItem));
}
/*************Freelance*/


/**************Услуги по разработке*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('dev') &&
    document.getElementById('dev_item')) {
    const dev = document.getElementById('dev');
    const devItem = document.getElementById('dev_item');

    /*Скроем содержимое*/
    devItem.style.display = 'none';
    dev.addEventListener('click', () => toggleNoneBlock(devItem));
}
/*************Услуги по разработке*/


/**************Newspaper*/
/*Создадим переменные для заголовка и содержимого*/
if (document.getElementById('newspaper') &&
    document.getElementById('newspaper_item')) {
    const newspaper = document.getElementById('newspaper');
    const newspaperItem = document.getElementById('newspaper_item');

    /*Скроем содержимое*/
    newspaperItem.style.display = 'none';
    newspaper.addEventListener('click', () => toggleNoneBlock(newspaperItem));
}
/*************Newspaper*/

//# sourceMappingURL=index.js.map
