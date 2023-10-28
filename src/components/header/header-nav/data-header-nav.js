import showFront from '../../front/front-main/front-main';

const dataHeaderNav = [
  {
    url: '/frontend.html',
    text: 'Frontend',
    content: '<front-main></front-main>',
    act() {
      showFront();
    },
  },
];

export default dataHeaderNav;
