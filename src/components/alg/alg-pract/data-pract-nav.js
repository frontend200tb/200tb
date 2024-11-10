import showCoderun from './coderun/coderun';
import showCodewars from './codewars/codewars';
import showLeetcode from './leetcode/leetcode';
import showTimus from './timus/timus';
import showAcmp from './acmp/acmp';

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
  {
    url: 'timus.html',
    text: 'timus',
    content: '<alg-timus></alg-timus>',
    act() {
      showTimus();
    },
  },
  {
    url: 'acmp.html',
    text: 'acmp',
    content: '<alg-acmp></alg-acmp>',
    act() {
      showAcmp();
    },
  },
];
