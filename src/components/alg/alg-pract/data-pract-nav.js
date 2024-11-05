import showCoderun from './coderun/coderun';
import showCodewars from './codewars/codewars';
import showLeetcode from './leetcode/leetcode';

export const dataPractNav = [
  {
    url: 'coderun.html',
    text: 'Coderun',
    content: '<alg-coderun></alg-coderun>',
    act() {
      showCoderun();
    },
  },
  {
    url: 'codewars.html',
    text: 'Codewars',
    content: '<alg-codewars></alg-codewars>',
    act() {
      showCodewars();
    },
  },
  {
    url: 'leetcode.html',
    text: 'Leetcode',
    content: '<alg-leetcode></alg-leetcode>',
    act() {
      showLeetcode();
    },
  },
];
