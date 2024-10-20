import showAlg from '../../alg/algorithm/algorithm';
import showCodeHtml from '../../code/code-html/code-html';
import showFront from '../../front/front-main/front-main';

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
    content: '<code-html></base-code-html>',
    act() {
      showCodeHtml();
    },
  },
 {
    url: '/index.html',
    text: 'Frontend',
    content: '<front-main></front-main>',
    act() {
      showFront();
    },
  },
];

export default dataHeaderNav;
