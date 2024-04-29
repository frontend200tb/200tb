import showFrontBase from './../front-base/front-base';
import showFrontFramework from './../front-framework/front-framework';
import showFrontTools from './../front-tools/front-tools';
import showFrontNet from './../front-net/front-net';
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
    url: 'front-net.html',
    text: 'net',
    content: '<front-net></front-net>',
    act() {
      showFrontNet();
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
