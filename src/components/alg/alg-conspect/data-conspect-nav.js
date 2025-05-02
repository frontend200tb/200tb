import showFatin from './fatin/fatin';
import showGustokashin from './gustokashin/gustokashin';
import showStepik from './stepik/stepik';
import showDp from './dp/dp';
import showKurs1 from './kurs1/kurs1';
import showKurs2 from './kurs2/kurs2';
import showSp1 from './sp1/sp1';
import showSp2 from './sp2/sp2';

export const dataConspectNav = [
  {
    url: 'fatin.html',
    text: 'МФ',
    content: '<alg-fatin></alg-fatin>',
    act() {
      showFatin();
    },
  },
  {
    url: 'gustokashin.html',
    text: 'МГ',
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
  {
    url: 'sp1.html',
    text: 'СП1',
    content: '<alg-sp1></alg-sp1>',
    act() {
      showSp1();
    },
  },
  {
    url: 'sp2.html',
    text: 'СП2',
    content: '<alg-sp2></alg-sp2>',
    act() {
      showSp2();
    },
  },
];
