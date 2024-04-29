/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import {main} from './../js/f-create-aside';

import htmlToolsTools from './elem-tools-tools.html';
import htmlToolsGit from './elem-tools-git.html';
import htmlToolsNotepad from './elem-tools-notepad.html';
import htmlToolsSublime from './elem-tools-sublime.html';
import htmlToolsVscode from './elem-tools-vscode.html';
import htmlToolsVim from './elem-tools-vim.html';

const aside = [
  htmlToolsTools,
  htmlToolsGit,
  htmlToolsNotepad,
  htmlToolsSublime,
  htmlToolsVscode,
  htmlToolsVim,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink(asideItems) {
  const currentContent = main;

  asideItems.forEach((elem, index) => {
    createAsideMenu(elem, index);
  })

  function createAsideMenu(elem, index) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = aside[index];
    });
  }
}
