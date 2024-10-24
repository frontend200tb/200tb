/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-books.js...
// Code
import dataBooksHtmlcss from './data/data-books-htmlcss';
import dataBooksJs from './data/data-books-js';
import dataBooksTs from './data/data-books-ts';
import dataBooksAssembler from './data/data-books-assembler';
import dataBooksC from './data/data-books-c';
import dataBooksCpp from './data/data-books-cpp';
import dataBooksCsharp from './data/data-books-csharp';
import dataBooksPascal from './data/data-books-pascal';
import dataBooksPhp from './data/data-books-php';
import dataBooksPython from './data/data-books-python';
import dataBooksBasic from './data/data-books-basic';
import dataBooksJava from './data/data-books-java';

// Base
import dataBooksBase from './data/data-books-base';
import dataBooksAlg from './data/data-books-alg';
import dataBooksOlimp from './data/data-books-olimp';
import dataBooksLinux from './data/data-books-linux';
import dataBooksUnix from './data/data-books-unix';
import dataBooksComp from './data/data-books-comp';
import dataBooksOs from './data/data-books-os';
import dataBooksBios from './data/data-books-bios';
import dataBooksNet from './data/data-books-net';
import dataBooksSysadmin from './data/data-books-sysadmin';
import dataBooksInformatika from './data/data-books-inform';
import dataBooksOop from './data/data-books-oop';
import dataBooksFreebsd from './data/data-books-freebsd';

// Framework
import dataBooksNode from './data/data-books-node';
import dataBooksAngular from './data/data-books-angular';
import dataBooksReact from './data/data-books-react';
import dataBooksVue from './data/data-books-vue';
import dataBooksBootstrap from './data/data-books-bootstrap';
import dataBooksJquery from './data/data-books-jquery';

// CMS
import dataBooksCms from './data/data-books-cms';

// Tools
import dataBooksAjax from './data/data-books-ajax';
import dataBooksDocker from './data/data-books-docker';
import dataBooksGit from './data/data-books-git';
import dataBooksGraphql from './data/data-books-graphql';
import dataBooksRegexp from './data/data-books-regexp';
import dataBooksSql from './data/data-books-sql';

// Theme
import dataBooksWeb from './data/data-books-web';
import dataBooksDevops from './data/data-books-devops';
import dataBooksTest from './data/data-books-test';
import dataBooksDataScience from './data/data-books-datascience';
import dataBooksDl from './data/data-books-dl';
import dataBooksMl from './data/data-books-ml';
import dataBooksMathDis from './data/data-books-math-dis';
import dataBooksMathFast from './data/data-books-math-fast';
import dataBooksGames from './data/data-books-games';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [
  // Code
  dataBooksHtmlcss, dataBooksJs, dataBooksTs, dataBooksAssembler, dataBooksC, dataBooksCpp, dataBooksCsharp, dataBooksPascal, dataBooksPhp, dataBooksPython, dataBooksBasic, dataBooksJava,
  // Base
  dataBooksBase, dataBooksAlg, dataBooksOlimp, dataBooksLinux, dataBooksUnix, dataBooksComp, dataBooksOs, dataBooksBios, dataBooksNet, dataBooksSysadmin, dataBooksInformatika, dataBooksOop, dataBooksFreebsd,
  // Framework
  dataBooksNode, dataBooksAngular, dataBooksReact, dataBooksVue, dataBooksBootstrap, dataBooksJquery,
  // CMS
  dataBooksCms,
  // Tools
  dataBooksAjax, dataBooksDocker, dataBooksGit, dataBooksGraphql, dataBooksRegexp, dataBooksSql,
  // Theme
  dataBooksDataScience, dataBooksDl, dataBooksDevops, dataBooksMl, dataBooksWeb, dataBooksTest, dataBooksMathDis, dataBooksMathFast, dataBooksGames];

// 3. Создаем массив с книгами dataBooks из массива dataArray
const dataBooks = [].concat(...dataArray);

export default function createInput() {
  return dataBooks;
}
