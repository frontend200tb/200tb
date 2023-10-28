import showFrontBooks from '../front/front-books/front-books';
import showFrontCode from '../front/front-code/front-code';
import showFrontEdu from '../front/front-edu/front-edu';
import showFrontLearned from '../front/front-learned/front-learned';
import showFrontNode from '../front/front-node/front-node';
import showFrontOffline from '../front/front-offline/front-offline';
import showFrontTools from '../front/front-tools/front-tools';
import showFrontVacancy from '../front/front-vacancy/front-vacancy';
import showFrontVideo from '../front/front-video/front-video';
import showFrontYt from '../front/front-yt/front-yt';

export const dataNavFront = [
  {
    url: 'front-books.html',
    text: 'Books',
    content: '<front-books></front-books>',
    act() {
      showFrontBooks();
    },
  },
  {
    url: 'front-code.html',
    text: 'Code',
    content: '<front-code></front-code>',
    act() {
      showFrontCode();
    },
  },
  {
    url: 'front-edu.html',
    text: 'Edu',
    content: '<front-edu></front-edu>',
    act() {
      showFrontEdu();
    },
  },
  {
    url: 'learned/learned.html',
    text: 'Learned',
    content: '<front-learned></front-learned>',
    act() {
      showFrontLearned();
    },
  },
  {
    url: 'front-node.html',
    text: 'Node',
    content: '<front-node></front-node>',
    act() {
      showFrontNode();
    },
  },
  {
    url: 'front-offline.html',
    text: 'Offline',
    content: '<front-offline></front-offline>',
    act() {
      showFrontOffline();
    },
  },
  {
    url: 'front-tools.html',
    text: 'Tools',
    content: '<front-tools></front-tools>',
    act() {
      showFrontTools();
    },
  },
  {
    url: 'front-vacancy.html',
    text: 'Vacancy',
    content: '<front-vacancy></front-vacancy>',
    act() {
      showFrontVacancy();
    },
  },
  {
    url: 'front-video.html',
    text: 'Video',
    content: '<front-video></front-video>',
    act() {
      showFrontVideo();
    },
  },
  {
    url: 'front-yt.html',
    text: 'Youtube',
    content: '<front-yt></front-yt>',
    act() {
      showFrontYt();
    },
  },
];
