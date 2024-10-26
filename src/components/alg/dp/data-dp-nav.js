import showDpTheory from './dp-theory/dp-theory';

export const dataDpNav = [
  {
    url: 'dp-theory.html',
    text: 'Теория',
    content: '<dp-theory></dp-theory>',
    act() {
      showDpTheory();
    },
  },
];
