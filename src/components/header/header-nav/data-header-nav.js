import showAlgorithm from '../../code/algorithm/algorithm';
import showFront from '../../front/front-main/front-main';

const dataHeaderNav = [
  {
    url: '/code.html',
    text: 'Code',
    content: '<base-algorithm></base-algorithm>',
    act() {
      showAlgorithm();
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
