import showAlTheory from './al-theory/al-theory';
import showJsCodewars from './js-codewars/js-codewars';
import showJsCoderun from './js-coderun/js-coderun';
import showJsLeetcode from './js-leetcode/js-leetcode';

export const dataAlgorithmNav = [
  {
    url: 'al-theory.html',
    text: 'Теория',
    content: '<al-theory></al-theory>',
    act() {
      showAlTheory();
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
    url: 'js-coderun.html',
    text: 'Coderun',
    content: '<js-coderun></js-coderun>',
    act() {
      showJsCoderun();
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
