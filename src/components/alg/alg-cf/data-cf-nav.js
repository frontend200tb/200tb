import showRounds      from './rounds/rounds';
import showYargu1      from './yargu1/yargu1';
import showYargu2      from './yargu2/yargu2';
import showYargu3      from './yargu3/yargu3';
import showMirea       from './mirea/mirea';
import showSch19       from './sch19/sch19';
import showAll         from './all/all';

export const dataCfNav = [
  {
    url: 'rounds.html',
    text: 'Rounds',
    content: '<alg-rounds></alg-rounds>',
    act() {
      showRounds();
    },
  },
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
    url: 'mirea.html',
    text: 'МИРЭА',
    content: '<alg-mirea></alg-mirea>',
    act() {
      showMirea();
    },
  },
  {
    url: 'sch19.html',
    text: 'SCH19_1',
    content: '<alg-sch19></alg-sch19>',
    act() {
      showSch19();
    },
  },
  {
    url: 'all.html',
    text: 'Все',
    content: '<alg-all></alg-all>',
    act() {
      showAll();
    },
  },
];
