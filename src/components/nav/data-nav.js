// alg
import showAlgBase from '../alg/alg-base/alg-base';
import showAlgConspect from '../alg/alg-conspect/alg-conspect';
import showAlgPract from '../alg/alg-pract/alg-pract';

// code
import showCodeHtml from '../code/code-html/code-html';
import showCodeCss from '../code/code-css/code-css';
import showCodeJs from '../code/code-js/code-js';
import showCodeTs from '../code/code-ts/code-ts';
import showCodePascal from '../code/code-pascal/code-pascal';
import showCodeC from '../code/code-c/code-c';
import showCodeAsm from '../code/code-asm/code-asm';
import showCodeOther from '../code/code-other/code-other';

// front
import showFrontEdu from '../front/front-edu/front-edu';
import showFrontLearned from '../front/front-learned/front-learned';
import showFrontNode from '../front/front-node/front-node';
import showFrontOffline from '../front/front-offline/front-offline';
import showFrontOnline from '../front/front-online/front-online';
import showFrontVacancy from '../front/front-vacancy/front-vacancy';

// lib
import showFrontBooks from '../lib/front-books/front-books';
import showFrontVideo from '../lib/front-video/front-video';
import showFrontYt from '../lib/front-yt/front-yt';

// alg
export const dataNavAlg = [
  {
    url: 'alg-base.html',
    text: 'Алгоритмы',
    content: '<alg-base></alg-base>',
    act() {
      showAlgBase();
    },
  },
  {
    url: 'alg-conspect.html',
    text: 'Конспекты',
    content: '<alg-conspect></alg-conspect>',
    act() {
      showAlgConspect();
    },
  },
  {
    url: 'alg-pract.html',
    text: 'Практика',
    content: '<alg-pract></alg-pract>',
    act() {
      showAlgPract();
    },
  },
]

// code
export const dataNavCode = [
  {
    url: 'code-html.html',
    text: 'HTML',
    content: '<code-html></code-html>',
    act() {
      showCodeHtml();
    },
  },
  {
    url: 'code-css.html',
    text: 'CSS',
    content: '<code-css></code-css>',
    act() {
      showCodeCss();
    },
  },
  {
    url: 'code-js.html',
    text: 'JS',
    content: '<code-js></code-js>',
    act() {
      showCodeJs();
    },
  },
  {
    url: 'code-ts.html',
    text: 'TS',
    content: '<code-ts></code-ts>',
    act() {
      showCodeTs();
    },
  },
  {
    url: 'code-pascal.html',
    text: 'Pascal',
    content: '<code-pascal></code-pascal>',
    act() {
      showCodePascal();
    },
  },
  {
    url: 'code-c.html',
    text: 'C/C++',
    content: '<code-c></code-c>',
    act() {
      showCodeC();
    },
  },
  {
    url: 'code-asm.html',
    text: 'Asm',
    content: '<code-asm></code-asm>',
    act() {
      showCodeAsm();
    },
  },
  {
    url: 'code-other.html',
    text: 'Other',
    content: '<code-other></code-other>',
    act() {
      showCodeOther();
    },
  },
];

// front
export const dataNavFront = [
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
    url: 'front-online.html',
    text: 'Online',
    content: '<front-online></front-online>',
    act() {
      showFrontOnline();
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
];

// lib
export const dataNavLib = [
  {
    url: 'front-books.html',
    text: 'Books',
    content: '<front-books></front-books>',
    act() {
      showFrontBooks();
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
