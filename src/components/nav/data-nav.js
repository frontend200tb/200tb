// code
import showCodeHtml from '../code/code-html/code-html';
import showCodeCss from '../code/code-css/code-css';
import showCodeJs from '../code/code-js/code-js';
import showCodeTs from '../code/code-ts/code-ts';
import showCodeCsharp from '../code/code-csharp/code-csharp';
import showCodeMarkdown from '../code/code-markdown/code-markdown';
import showCodePug from '../code/code-pug/code-pug';
import showCodeSass from '../code/code-sass/code-sass';
import showCodePhp from '../code/code-php/code-php';

// front
import showFrontBooks from '../front/front-books/front-books';
import showFrontCode from '../front/front-code/front-code';
import showFrontEdu from '../front/front-edu/front-edu';
import showFrontLearned from '../front/front-learned/front-learned';
import showFrontNode from '../front/front-node/front-node';
import showFrontOffline from '../front/front-offline/front-offline';
import showFrontVacancy from '../front/front-vacancy/front-vacancy';
import showFrontVideo from '../front/front-video/front-video';
import showFrontYt from '../front/front-yt/front-yt';

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
    url: 'code-csharp.html',
    text: 'C#',
    content: '<code-csharp></code-csharp>',
    act() {
      showCodeCsharp();
    },
  },
  {
    url: 'code-markdown.html',
    text: 'Markdown',
    content: '<code-markdown></code-markdown>',
    act() {
      showCodeMarkdown();
    },
  },
  {
    url: 'code-pug.html',
    text: 'Pug',
    content: '<code-pug></code-pug>',
    act() {
      showCodePug();
    },
  },
  {
    url: 'code-sass.html',
    text: 'SASS',
    content: '<code-sass></code-sass>',
    act() {
      showCodeSass();
    },
  },
  {
    url: 'code-php.html',
    text: 'Php',
    content: '<code-php></code-php>',
    act() {
      showCodePhp();
    },
  },
];

// front
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
