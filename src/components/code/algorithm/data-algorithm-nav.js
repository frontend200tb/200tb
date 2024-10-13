import showAlTheory from './al-theory/al-theory';
import showJsCoderun from './js-coderun/js-coderun';
import showJsCodewars from './js-codewars/js-codewars';
import showJsLeetcode from './js-leetcode/js-leetcode';
import showJsTasks from './js-tasks/js-tasks';

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
  {
    url: 'js-tasks.html',
    text: 'Задачи',
    content: '<js-tasks></js-tasks>',
    act() {
      showJsTasks();
    },
  },
];
