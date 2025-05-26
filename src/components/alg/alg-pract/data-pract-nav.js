import showAcmp from './acmp/acmp';
import showInformatics from './informatics/informatics';
import showTimus from './timus/timus';
import showCodeforces from './codeforces/codeforces';
import showCoderun from './coderun/coderun';
import showCodewars from './codewars/codewars';
import showLeetcode from './leetcode/leetcode';

export const dataPractNav = [
  {
    url: 'acmp.html',
    text: 'acmp',
    content: '<alg-acmp></alg-acmp>',
    act() {
      showAcmp();
    },
  },
  {
    url: 'informatics.html',
    text: 'informatics',
    content: '<alg-informatics></alg-informatics>',
    act() {
      showInformatics();
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
    url: 'codeforces.html',
    text: 'Codeforces',
    content: '<alg-codeforces></alg-codeforces>',
    act() {
      showCodeforces();
    },
  },
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
