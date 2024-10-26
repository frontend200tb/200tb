import showJsCoderun from './js-coderun/js-coderun';
import showJsCodewars from './js-codewars/js-codewars';
import showJsLeetcode from './js-leetcode/js-leetcode';

export const dataPracticeNav = [
  {
    url: 'js-coderun.html',
    text: 'Coderun',
    content: '<js-coderun></js-coderun>',
    act() {
      showJsCoderun();
    },
  },
  {
    url: 'js-codewars.html',
    text: 'Codewars',
    content: '<js-codewars></js-codewars>',
    act() {
      showJsCodewars();
    },
  },
  {
    url: 'js-leetcode.html',
    text: 'Leetcode',
    content: '<js-leetcode></js-leetcode>',
    act() {
      showJsLeetcode();
    },
  },
];
