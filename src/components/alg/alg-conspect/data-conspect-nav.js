import showFatin from './fatin/fatin';
import showGustokashin from './gustokashin/gustokashin';
import showStepik from './stepik/stepik';
import showDp from './dp/dp';
import showKurs1 from './kurs1/kurs1';
import showKurs2 from './kurs2/kurs2';

export const dataConspectNav = [
  {
    url: 'fatin.html',
    text: 'Фатин',
    content: '<alg-fatin></alg-fatin>',
    act() {
      showFatin();
    },
  },
  {
    url: 'gustokashin.html',
    text: 'Густокашин',
    content: '<alg-gustokashin></alg-gustokashin>',
    act() {
      showGustokashin();
    },
  },
  {
    url: 'stepik.html',
    text: 'stepik',
    content: '<alg-stepik></alg-stepik>',
    act() {
      showStepik();
    },
  },
  {
    url: 'dp.html',
    text: 'ДП',
    content: '<alg-dp></alg-dp>',
    act() {
      showDp();
    },
  },
  {
    url: 'kurs1.html',
    text: 'Курс 1',
    content: '<alg-kurs1></alg-kurs1>',
    act() {
      showKurs1();
    },
  },
  {
    url: 'kurs2.html',
    text: 'Курс 2',
    content: '<alg-kurs2></alg-kurs2>',
    act() {
      showKurs2();
    },
  },
];
