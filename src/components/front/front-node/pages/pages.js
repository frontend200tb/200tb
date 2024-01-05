/** **************
Функция pageLink вешает обработчик клика на элементы asideMenu
****************** */
import htmlNodeNode from './elem-node-node.html';
import htmlNodeAxios from './elem-node-axios.html';
import htmlNodeBabel from './elem-node-babel.html';
import htmlNodeEslint from './elem-node-eslint.html';
import htmlNodeGulp from './elem-node-gulp.html';
import htmlNodeVite from './elem-node-vite.html';
import htmlNodeWebpack from './elem-node-webpack.html';
import htmlNodeTailwind from './elem-node-tailwind.html';
import htmlNodeNodejs from './elem-node-nodejs.html';
import contentOrder from '../../../../js/order';

export default function pageLink() {
  const currentContent = document.querySelector('#node');

  const asideNode = document.getElementById('node-node');
  if (asideNode) {
    asideNode.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeNode;
      contentOrder();
    });
  }

  const asideAxios = document.getElementById('node-axios');
  if (asideAxios) {
    asideAxios.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeAxios;
      contentOrder();
    });
  }

  const asideBabel = document.getElementById('node-babel');
  if (asideBabel) {
    asideBabel.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeBabel;
      contentOrder();
    });
  }

  const asideEslint = document.getElementById('node-eslint');
  if (asideEslint) {
    asideEslint.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeEslint;
      contentOrder();
    });
  }

  const asideGulp = document.getElementById('node-gulp');
  if (asideGulp) {
    asideGulp.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeGulp;
      contentOrder();
    });
  }

  const asideVite = document.getElementById('node-vite');
  if (asideVite) {
    asideVite.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeVite;
      contentOrder();
    });
  }

  const asideWebpack = document.getElementById('node-webpack');
  if (asideWebpack) {
    asideWebpack.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeWebpack;
      contentOrder();
    });
  }

  const asideTailwind = document.getElementById('node-tailwind');
  if (asideTailwind) {
    asideTailwind.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeTailwind;
      contentOrder();
    });
  }

  const asideNodejs = document.getElementById('node-nodejs');
  if (asideNodejs) {
    asideNodejs.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlNodeNodejs;
    });
  }
}
