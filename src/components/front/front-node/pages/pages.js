/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import './elem-node-node';
import './elem-node-angular';
import './elem-node-axios';
import './elem-node-babel';
import './elem-node-eslint';
import './elem-node-gulp';
import './elem-node-react';
import './elem-node-typescript';
import './elem-node-vite';
import './elem-node-vue';
import './elem-node-webpack';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#node');

  const asideNode = document.getElementById('node-node');
  if (asideNode) {
    asideNode.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-node></node-node>';
      contentOrder();
    });
  }

  const asideAngular = document.getElementById('node-angular');
  if (asideAngular) {
    asideAngular.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-angular></node-angular>';
      contentOrder();
    });
  }

  const asideAxios = document.getElementById('node-axios');
  if (asideAxios) {
    asideAxios.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-axios></node-axios>';
      contentOrder();
    });
  }

  const asideBabel = document.getElementById('node-babel');
  if (asideBabel) {
    asideBabel.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-babel></node-babel>';
      contentOrder();
    });
  }

  const asideEslint = document.getElementById('node-eslint');
  if (asideEslint) {
    asideEslint.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-eslint></node-eslint>';
      contentOrder();
    });
  }

  const asideGulp = document.getElementById('node-gulp');
  if (asideGulp) {
    asideGulp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-gulp></node-gulp>';
      contentOrder();
    });
  }

  const asideReact = document.getElementById('node-react');
  if (asideReact) {
    asideReact.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-react></node-react>';
      contentOrder();
    });
  }

  const asideTypescript = document.getElementById('node-typescript');
  if (asideTypescript) {
    asideTypescript.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-typescript></node-typescript>';
      contentOrder();
    });
  }

  const asideVite = document.getElementById('node-vite');
  if (asideVite) {
    asideVite.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-vite></node-vite>';
      contentOrder();
    });
  }

  const asideVue = document.getElementById('node-vue');
  if (asideVue) {
    asideVue.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-vue></node-vue>';
      contentOrder();
    });
  }

  const asideWebpack = document.getElementById('node-webpack');
  if (asideWebpack) {
    asideWebpack.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = '<node-webpack></node-webpack>';
      contentOrder();
    });
  }
}
