import showAlg   from '../../alg/alg-base/alg-base';
import showCode  from '../../code/code-html/code-html';
import showFront from '../../front/front-edu/front-edu';
import showLib   from '../../lib/lib-books/lib-books';

const dataHeaderNav = [
  {
    url: '/alg.html',
    text: 'Alg',
    content: '<alg-base></alg-base>',
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
    content: '<lib-books></lib-books>',
    act() {
      showLib();
    },
  },
];

export default dataHeaderNav;
