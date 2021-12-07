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