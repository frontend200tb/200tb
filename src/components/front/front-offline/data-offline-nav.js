import showFrontBase from './../front-base/front-base';
import showFrontNets from './../front-nets/front-nets';
import showFrontFramework from './../front-framework/front-framework';
import showFrontTools from './../front-tools/front-tools';
import showFrontArticles from './../front-articles/front-articles';

export const dataOfflineNav = [
  {
    url: 'front-base.html',
    text: 'основы',
    content: '<front-base></front-base>',
    act() {
      showFrontBase();
    },
  },
  {
    url: 'front-nets.html',
    text: 'сети',
    content: '<front-nets></front-nets>',
    act() {
      showFrontNets();
    },
  },
  {
    url: 'front-framework.html',
    text: 'framework',
    content: '<front-framework></front-framework>',
    act() {
      showFrontFramework();
    },
  },
  {
    url: 'front-tools.html',
    text: 'tools',
    content: '<front-tools></front-tools>',
    act() {
      showFrontTools();
    },
  },
  {
    url: 'front-articles.html',
    text: 'articles',
    content: '<front-articles></front-articles>',
    act() {
      showFrontArticles();
    },
  },
];
