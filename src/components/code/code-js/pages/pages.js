/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import htmlCodeJs from './elem-code-js.html';
import htmlCodeString from './elem-code-string.html';
import htmlCodeNull from './elem-code-null.html';
import htmlCodeUndefined from './elem-code-undefined.html';
import htmlCodeArray from './elem-code-array.html';
import htmlCodeDate from './elem-code-date.html';
import htmlCodeHistory from './elem-code-history.html';
import htmlCodeLocation from './elem-code-location.html';
import htmlCodeMath from './elem-code-math.html';
import htmlCodePromise from './elem-code-promise.html';
import htmlCodePrototype from './elem-code-prototype.html';
import htmlCodeStorage from './elem-code-storage.html';
import htmlCodeXhr from './elem-code-xhr.html';
import htmlCodeAscii from './elem-code-ascii.html';
import htmlCodeUnicode from './elem-code-unicode.html';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const asideJs = [htmlCodeJs, htmlCodeString, htmlCodeNull, htmlCodeUndefined,
  htmlCodeArray, htmlCodeDate, htmlCodeHistory, htmlCodeLocation, htmlCodeMath,
  htmlCodePromise, htmlCodePrototype, htmlCodeStorage, htmlCodeXhr,
  htmlCodeAscii, htmlCodeUnicode];  
  const currentContent = document.querySelector('#code');
  const asideItems = document.querySelectorAll('.aside a');

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = asideJs[index];
    });
  }
}