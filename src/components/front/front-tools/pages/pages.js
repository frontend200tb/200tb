/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import htmlToolsTools from './elem-tools-tools.html';
import htmlToolsGit from './elem-tools-git.html';
import htmlToolsNotepad from './elem-tools-notepad.html';
import htmlToolsSublime from './elem-tools-sublime.html';
import htmlToolsVscode from './elem-tools-vscode.html';
import htmlToolsVim from './elem-tools-vim.html';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#tools');

  const asideTools = document.getElementById('tools-tools');
  if (asideTools) {
    asideTools.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsTools;
      contentOrder();
    });
  }

  const asideGit = document.getElementById('tools-git');
  if (asideGit) {
    asideGit.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsGit;
      contentOrder();
    });
  }

  const asideNotepad = document.getElementById('tools-notepad');
  if (asideNotepad) {
    asideNotepad.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsNotepad;
      contentOrder();
    });
  }

  const asideSublime = document.getElementById('tools-sublimetext');
  if (asideSublime) {
    asideSublime.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsSublime;
      contentOrder();
    });
  }

  const asideVscode = document.getElementById('tools-vscode');
  if (asideVscode) {
    asideVscode.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsVscode;
      contentOrder();
    });
  }

  const asideVim = document.getElementById('tools-vim');
  if (asideVim) {
    asideVim.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlToolsVim;
      contentOrder();
    });
  }
}
