/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-books.js...
// Code
import dataBooksHtmlcss from './data/data-books-htmlcss';
import dataBooksJs from './data/data-books-js';
import dataBooksTs from './data/data-books-ts';
import dataBooksAsm from './data/data-books-asm';
import dataBooksBasic from './data/data-books-basic';
import dataBooksPascal from './data/data-books-pascal';
import dataBooksC from './data/data-books-c';
import dataBooksCpp from './data/data-books-cpp';
import dataBooksCppBuilder from './data/data-books-cppBuilder';
import dataBooksCppQt from './data/data-books-cppQt';
import dataBooksCppVisual from './data/data-books-cppVisual';
import dataBooksCsharp from './data/data-books-csharp';
import dataBooksPhp from './data/data-books-php';
import dataBooksJava from './data/data-books-java';
import dataBooksPython from './data/data-books-python';

// Base
import dataBooksBase from './data/data-books-base';
import dataBooksArch from './data/data-books-arch';
import dataBooksAlg from './data/data-books-alg';
import dataBooksOlimp from './data/data-books-olimp';
import dataBooksComp from './data/data-books-comp';
import dataBooksMicro from './data/data-books-micro';
import dataBooksDos from './data/data-books-dos';
import dataBooksWin32 from './data/data-books-win32';
import dataBooksLinux from './data/data-books-linux';
import dataBooksUnix from './data/data-books-unix';
import dataBooksOs from './data/data-books-os';
import dataBooksNets from './data/data-books-nets';
import dataBooksSecure from './data/data-books-secure';
import dataBooksStm from './data/data-books-stm';
import dataBooksCompil from './data/data-books-compil';
import dataBooksInf from './data/data-books-inf';
import dataBooksInfSchool from './data/data-books-infschool';

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
import dataBooksBios from './data/data-books-bios';
import dataBooksDocker from './data/data-books-docker';
import dataBooksGit from './data/data-books-git';
import dataBooksGraphql from './data/data-books-graphql';
import dataBooksRegexp from './data/data-books-regexp';
import dataBooksSql from './data/data-books-sql';
import dataBooksFreebsd from './data/data-books-freebsd';
import dataBooksOop from './data/data-books-oop';

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
import dataBooksCrypt from './data/data-books-crypt';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [
  // Code
  dataBooksHtmlcss, dataBooksJs, dataBooksTs, dataBooksAsm, dataBooksBasic, dataBooksPascal, dataBooksC, dataBooksCpp, dataBooksCppBuilder, dataBooksCppQt, dataBooksCppVisual, dataBooksCsharp, dataBooksPhp, dataBooksJava, dataBooksPython,
  // Base
  dataBooksBase, dataBooksArch, dataBooksAlg, dataBooksOlimp, dataBooksComp, dataBooksMicro, dataBooksDos, dataBooksWin32, dataBooksLinux, dataBooksUnix, dataBooksOs, dataBooksNets, dataBooksSecure, dataBooksStm, dataBooksCompil, dataBooksInf, dataBooksInfSchool,
  // Framework
  dataBooksNode, dataBooksAngular, dataBooksReact, dataBooksVue, dataBooksBootstrap, dataBooksJquery,
  // CMS
  dataBooksCms,
  // Tools
  dataBooksAjax, dataBooksBios, dataBooksDocker, dataBooksGit, dataBooksGraphql, dataBooksRegexp, dataBooksSql, dataBooksFreebsd, dataBooksOop,
  // Theme
  dataBooksDataScience, dataBooksDl, dataBooksDevops, dataBooksMl, dataBooksWeb, dataBooksTest, dataBooksMathDis, dataBooksMathFast, dataBooksGames, dataBooksCrypt];

// 3. Создаем массив с книгами dataBooks из массива dataArray
const dataBooks = [].concat(...dataArray);

export default function createInput() {
  return dataBooks;
}
