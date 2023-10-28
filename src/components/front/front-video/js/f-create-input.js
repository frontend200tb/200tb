/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-video.js...
import dataVideo1cbitrix from './data/data-video-1cbitrix';
import dataVideoAngular from './data/data-video-angular';
import dataVideoBem from './data/data-video-bem';
import dataVideoBootstrap from './data/data-video-bootstrap';
import dataVideoCsharp from './data/data-video-csharp';
import dataVideoDocker from './data/data-video-docker';
import dataVideoDrupal from './data/data-video-drupal';
import dataVideoElectron from './data/data-video-electron';
import dataVideoFigma from './data/data-video-figma';
import dataVideoFreelance from './data/data-video-freelance';
import dataVideoFrontend from './data/data-video-frontend';
import dataVideoGit from './data/data-video-git';
import dataVideoGulp from './data/data-video-gulp';
import dataVideoHtmlcss from './data/data-video-htmlcss';
import dataVideoInterview from './data/data-video-interview';
import dataVideoJoomla from './data/data-video-joomla';
import dataVideoJs from './data/data-video-js';
import dataVideoJson from './data/data-video-json';
import dataVideoNuxt from './data/data-video-nuxt';
import dataVideoOpencart from './data/data-video-opencart';
import dataVideoPug from './data/data-video-pug';
import dataVideoReact from './data/data-video-react';
import dataVideoRedux from './data/data-video-redux';
import dataVideoSass from './data/data-video-sass';
import dataVideoTilda from './data/data-video-tilda';
import dataVideoTs from './data/data-video-ts';
import dataVideoVscode from './data/data-video-vscode';
import dataVideoVue from './data/data-video-vue';
import dataVideoWeb from './data/data-video-web';
import dataVideoWebpack from './data/data-video-webpack';
import dataVideoWp from './data/data-video-wp';
import dataVideoYii2 from './data/data-video-yii2';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataVideoHtmlcss, dataVideo1cbitrix, dataVideoAngular, dataVideoBem,
  dataVideoBootstrap, dataVideoCsharp, dataVideoDocker, dataVideoDrupal, dataVideoElectron,
  dataVideoFigma, dataVideoFreelance, dataVideoFrontend, dataVideoGit, dataVideoGulp,
  dataVideoInterview, dataVideoJoomla, dataVideoJs, dataVideoJson, dataVideoNuxt, dataVideoOpencart,
  dataVideoPug, dataVideoReact, dataVideoRedux, dataVideoSass, dataVideoTilda, dataVideoTs,
  dataVideoVscode, dataVideoVue, dataVideoWeb, dataVideoWebpack, dataVideoWp, dataVideoYii2];

// 3. Создаем массив с книгами dataVideo из массива dataArray
const dataVideo = [].concat(...dataArray);

export default function createInput() {
  return dataVideo;
}
