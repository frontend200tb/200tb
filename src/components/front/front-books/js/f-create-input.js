/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-books.js...
import dataBooksAlgorithm from './data/data-books-algorithm';
import dataBooksBase from './data/data-books-base';
import dataBooksComp from './data/data-books-comp';
import dataBooksCompEn from './data/data-books-comp-en';
import dataBooksHtmlcss from './data/data-books-htmlcss';
import dataBooksHtmlcssEn from './data/data-books-htmlcss-en';
import dataBooksBootstrap from './data/data-books-bootstrap';
import dataBooksBootstrapEn from './data/data-books-bootstrap-en';
import dataBooksInformatika from './data/data-books-inform';
import dataBooksJs from './data/data-books-js';
import dataBooksJsEn from './data/data-books-js-en';
import dataBooksJquery from './data/data-books-jquery';
import dataBooksJqueryEn from './data/data-books-jquery-en';
import dataBooksTs from './data/data-books-ts';
import dataBooksTsEn from './data/data-books-ts-en';
import dataBooksAngular from './data/data-books-angular';
import dataBooksAngularEn from './data/data-books-angular-en';
import dataBooksReact from './data/data-books-react';
import dataBooksReactEn from './data/data-books-react-en';
import dataBooksVue from './data/data-books-vue';
import dataBooksVueEn from './data/data-books-vue-en';
import dataBooksNode from './data/data-books-node';
import dataBooksNodeEn from './data/data-books-node-en';
import dataBooksWeb from './data/data-books-web';
import dataBooksWebEn from './data/data-books-web-en';
import dataBooksPhp from './data/data-books-php';
import dataBooksPhpEn from './data/data-books-php-en';
import dataBooksPython from './data/data-books-python';
import dataBooksPythonEn from './data/data-books-python-en';
import dataBooksCsharp from './data/data-books-csharp';
import dataBooksOop from './data/data-books-oop';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataBooksHtmlcss, dataBooksHtmlcssEn, dataBooksJs, dataBooksJsEn, dataBooksTs,
  dataBooksTsEn, dataBooksAngular, dataBooksAngularEn, dataBooksReact, dataBooksReactEn,
  dataBooksVue, dataBooksVueEn, dataBooksBootstrap, dataBooksBootstrapEn, dataBooksJquery,
  dataBooksJqueryEn, dataBooksNode, dataBooksNodeEn, dataBooksInformatika, dataBooksComp,
  dataBooksCompEn, dataBooksBase, dataBooksAlgorithm, dataBooksWeb, dataBooksWebEn, dataBooksPhp,
  dataBooksPhpEn, dataBooksPython, dataBooksPythonEn, dataBooksCsharp, dataBooksOop];

// 3. Создаем массив с книгами dataBooks из массива dataArray
const dataBooks = [].concat(...dataArray);

export default function createInput() {
  return dataBooks;
}
