/******************
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

import htmlNodeNode from './elem-node-node.html';
import htmlNodeAxios from './elem-node-axios.html';
import htmlNodeBabel from './elem-node-babel.html';
import htmlNodeEslint from './elem-node-eslint.html';
import htmlNodeGulp from './elem-node-gulp.html';
import htmlNodeVite from './elem-node-vite.html';
import htmlNodeWebpack from './elem-node-webpack.html';
import htmlNodeWebpackDevServer from './elem-node-webpack-dev-server.html';
import htmlNodeTailwind from './elem-node-tailwind.html';
import htmlNodeNodejs from './elem-node-nodejs.html';

const aside = [
  htmlNodeNode,
  htmlNodeAxios,
  htmlNodeBabel,
  htmlNodeEslint,
  htmlNodeGulp,
  htmlNodeVite,
  htmlNodeWebpack,
  htmlNodeWebpackDevServer,
  htmlNodeTailwind,
  htmlNodeNodejs,
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
