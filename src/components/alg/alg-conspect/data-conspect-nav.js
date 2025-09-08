import showYargu1      from './yargu1/yargu1';
import showYargu2      from './yargu2/yargu2';
import showYargu3      from './yargu3/yargu3';
import showGustokashin from './gustokashin/gustokashin';
import showFatin       from './fatin/fatin';
import showFtl         from './ftl/ftl';
import show1580        from './1580/1580';
import showStepik      from './stepik/stepik';
import showDp          from './dp/dp';
import showKurs1       from './kurs1/kurs1';
import showKurs2       from './kurs2/kurs2';

export const dataConspectNav = [
  {
    url: 'yargu1.html',
    text: 'ЯрГУ1',
    content: '<alg-yargu1></alg-yargu1>',
    act() {
      showYargu1();
    },
  },
  {
    url: 'yargu2.html',
    text: 'ЯрГУ2',
    content: '<alg-yargu2></alg-yargu2>',
    act() {
      showYargu2();
    },
  },
  {
    url: 'yargu3.html',
    text: 'ЯрГУ3',
    content: '<alg-yargu3></alg-yargu3>',
    act() {
      showYargu3();
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
    url: 'fatin.html',
    text: 'МФ',
    content: '<alg-fatin></alg-fatin>',
    act() {
      showFatin();
    },
  },
  {
    url: 'ftl.html',
    text: 'ФТЛ',
    content: '<alg-ftl></alg-ftl>',
    act() {
      showFtl();
    },
  },
  {
    url: '1580.html',
    text: '1580',
    content: '<alg-1580></alg-1580>',
    act() {
      show1580();
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
