/*Страница с интернет радио*/


/*Создадим переменные для плеера*/
const player = document.getElementById('player');
const radioTitle = document.getElementById('radio__title');
const radioLogo = document.getElementById('radio__logo');
const radioText = document.getElementById('radio__text');


/*Функция setRadio записывает данные в плеер*/
const setRadio = (station) => {
    player.setAttribute('src', station.stream);
    radioTitle.innerHTML = (station.title);
    radioLogo.setAttribute('src', station.logo);
    radioText.innerHTML = (station.site);
}


/*Создадим объекты для радиостанций*/
/*Сохраним в объекте данные Radio 012 Požarevac Srbija*/
const srb012 = {
    "title": "Radio 012 Požarevac",
    "stream": "https://pozarevac-bobanex.radioca.st/stream",
    "logo": "../img/radio/radio_012.jpg",
    "site": "https://radio-012.tk/",
    "id": "stanica012",
    "btnid": "srb_012"
}


/*Сохраним в объекте данные Radio 101 Beograd Srbija*/
const srb101 = {
    "title": "Radio 101 Beograd",
    "stream": "https://radiossl.radio101.rs/mp3",
    "logo": "../img/radio/radio_101.png",
    "site": "http://radio101.rs/",
    "id": "stanica101",
    "btnid": "srb_101"
}


/*Сохраним в объекте данные Radio Aparat Beograd Srbija*/
const srbAparat = {
    "title": "Radio Aparat Beograd",
    "stream": "https://ca3ssl.rcast.net/stream/60815/",
    "logo": "../img/radio/radio_aparat.jpg",
    "site": "https://www.radioaparat.com/",
    "id": "stanicaAparat",
    "btnid": "srb_aparat"
}


/*Сохраним в объекте данные Radio AS FM Novi Sad Srbija*/
const srbAsfm = {
    "title": "Radio AS FM Novi Sad",
    "stream": "https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
    "logo": "../img/radio/radio_asfm.png",
    "site": "https://radioas.fm/",
    "id": "stanicaAsfm",
    "btnid": "srb_asfm"
}


/*Функция createStation создадет станцию в списке радиостанций*/
const createStation = (station) => {
    const stanica = document.getElementById(station.id);
    console.log(station.id);
    console.log(stanica);
    const btn = document.createElement('button');
    btn.id = station.btnid;
    btn.innerHTML = "Listen live";
    console.log(btn);
    const title = document.createElement('strong');
    title.innerHTML = station.title;
    console.log(title);
    stanica.appendChild(btn);
    stanica.appendChild(title);
}


/*Создадим станции в списке радиостанций*/
createStation(srb012);
createStation(srb101);
createStation(srbAparat);
createStation(srbAsfm);


/*Добавим обработчики нажатия на button Listen live */
srb_012.addEventListener('click', () => setRadio(srb012));

srb_101.addEventListener('click', () => setRadio(srb101));

srb_aparat.addEventListener('click', () => setRadio(srbAparat));

srb_asfm.addEventListener('click', () => setRadio(srbAsfm));
