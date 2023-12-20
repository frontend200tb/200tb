import showCode from '../../code/code-main/code-main';
import showFront from '../../front/front-main/front-main';

const dataHeaderNav = [
  {
    url: '/code.html',
    text: 'Code',
    content: '<code-main></code-main>',
    act() {
      showCode();
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
