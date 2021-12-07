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