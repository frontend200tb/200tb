/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import './elem-tools-tools';
import './elem-tools-git';
import './elem-tools-notepad';
import './elem-tools-sublime';
import './elem-tools-vscode';
import './elem-tools-vim';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#tools');

  const asideTools = document.getElementById('tools-tools');
  if (asideTools) {
    asideTools.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-tools></tools-tools>';
      contentOrder();
    });
  }

  const asideGit = document.getElementById('tools-git');
  if (asideGit) {
    asideGit.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-git></tools-git>';
      contentOrder();
    });
  }

  const asideNotepad = document.getElementById('tools-notepad');
  if (asideNotepad) {
    asideNotepad.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-notepad></tools-notepad>';
      contentOrder();
    });
  }

  const asideSublime = document.getElementById('tools-sublimetext');
  if (asideSublime) {
    asideSublime.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-sublime></tools-sublime>';
      contentOrder();
    });
  }

  const asideVscode = document.getElementById('tools-vscode');
  if (asideVscode) {
    asideVscode.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-vscode></tools-vscode>';
      contentOrder();
    });
  }

  const asideVim = document.getElementById('tools-vim');
  if (asideVim) {
    asideVim.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<tools-vim></tools-vim>';
      contentOrder();
    });
  }
}
