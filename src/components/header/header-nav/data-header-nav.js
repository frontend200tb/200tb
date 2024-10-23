import showAlg from '../../alg/algorithm/algorithm';
import showCode from '../../code/code-html/code-html';
import showFront from '../../front/front-edu/front-edu';
import showLib from '../../lib/front-books/front-books';

const dataHeaderNav = [
  {
    url: '/alg.html',
    text: 'Alg',
    content: '<base-algorithm></base-algorithm>',
    act() {
      showAlg();
    },
  },
  {
    url: '/code.html',
    text: 'Code',
    content: '<code-html></code-html>',
    act() {
      showCode();
    },
  },
 {
    url: '/index.html',
    text: 'Frontend',
    content: '<front-edu></front-edu>',
    act() {
      showFront();
    },
  },
 {
    url: '/lib.html',
    text: 'Lib',
    content: '<front-books></front-books>',
    act() {
      showLib();
    },
  },
];

export default dataHeaderNav;
