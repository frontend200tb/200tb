/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import {main} from './../js/f-create-aside';

// Aside
import htmlEduRss2024stage3 from './elem-edu-rss2024-stage3-react.html';
import htmlEduRss2024stage0 from './elem-edu-rss2024-stage0.html';
import htmlEduCourses from './elem-edu-courses.html';
import htmlEduCoursesLearned from './elem-edu-courseslearned.html';
import htmlEduLearning from './elem-edu-learning.html';
import htmlEduRss from './elem-edu-rss.html';
import htmlEduRss2024stage2 from './elem-edu-rss2024-stage2.html';
import htmlEduRss2023stage1 from './elem-edu-rss2023-stage1.html';
import htmlEduDsr2023net from './elem-edu-dsr2023net.html';
import htmlEduRss2023stage0 from './elem-edu-rss2023-stage0.html';
import htmlEduRss2022stage3 from './elem-edu-rss2022-stage3-angular.html';
import htmlEduRss2022stage1 from './elem-edu-rss2022-stage1.html';
import htmlEduRss2022stage0 from './elem-edu-rss2022-stage0.html';
import htmlEduQuiz from './elem-edu-quiz.html';

// DSR
import htmlDsrLec0 from './dsr/dsr2023net-lecture0.html';
import htmlDsrLec1 from './dsr/dsr2023net-lecture1.html';
import htmlDsrLec2 from './dsr/dsr2023net-lecture2.html';
import htmlDsrLec3 from './dsr/dsr2023net-lecture3.html';
import htmlDsrLec4 from './dsr/dsr2023net-lecture4.html';
import htmlDsrLec5 from './dsr/dsr2023net-lecture5.html';
import htmlDsrLec6 from './dsr/dsr2023net-lecture6.html';
import htmlDsrLec7 from './dsr/dsr2023net-lecture7.html';
import htmlDsrLec8 from './dsr/dsr2023net-lecture8.html';
import htmlDsrLec9 from './dsr/dsr2023net-lecture9.html';
import htmlDsrLec10 from './dsr/dsr2023net-lecture10.html';
import htmlDsrLec11 from './dsr/dsr2023net-lecture11.html';
import htmlDsrLec12 from './dsr/dsr2023net-lecture12.html';

import htmlDsrWshop1 from './dsr/dsr2023net-workshop1.html';
import htmlDsrWshop2 from './dsr/dsr2023net-workshop2.html';
import htmlDsrWshop3 from './dsr/dsr2023net-workshop3.html';
import htmlDsrWshop4 from './dsr/dsr2023net-workshop4.html';
import htmlDsrWshop5 from './dsr/dsr2023net-workshop5.html';
import htmlDsrWshop6 from './dsr/dsr2023net-workshop6.html';

import htmlDsrExam from './dsr/dsr-exam.html';

// RS Test stage 1
import htmlRsTestRss from './rs-test/rs-test-rss.html';
import htmlRsTestGit from './rs-test/rs-test-git.html';
import htmlRsTestFundInternet from './rs-test/rs-test-fundinternet.html';
import htmlRsTestHtmlBasics from './rs-test/rs-test-htmlbasics.html';
import htmlRsTestCssBasics from './rs-test/rs-test-cssbasics.html';
import htmlRsTestCssFlex from './rs-test/rs-test-cssflex.html';
import htmlRsTestJsBasics from './rs-test/rs-test-jsbasics.html';
import htmlRsTestJsTypes from './rs-test/rs-test-jstypes.html';
import htmlRsTestJsScope from './rs-test/rs-test-jsscope.html';
import htmlRsTestJsEvolution from './rs-test/rs-test-jsevolution.html';
import htmlRsTestCssflexbox from './rs-test/rs-test-cssflexbox.html';
import htmlRsTestCssGrid from './rs-test/rs-test-cssgrid.html';
import htmlRsTestSass from './rs-test/rs-test-sass.html';
import htmlRsTestCssModules from './rs-test/rs-test-cssmodules.html';
import htmlRsTestMediaqueries from './rs-test/rs-test-mediaqueries.html';
import htmlRsTestHtmlform from './rs-test/rs-test-htmlform.html';
import htmlRsTestDomapi from './rs-test/rs-test-domapi.html';
import htmlRsTestDomevents from './rs-test/rs-test-domevents.html';
import htmlRsTestGitgithub from './rs-test/rs-test-gitgithub.html';
import htmlRsTestAlgorithms from './rs-test/rs-test-algorithms.html';
import htmlRsTestCleancode from './rs-test/rs-test-cleancode.html';
import htmlRsTestLinters from './rs-test/rs-test-linters.html';
import htmlRsTestModules from './rs-test/rs-test-modules.html';
import htmlRsTestBundlers from './rs-test/rs-test-bundlers.html';
import htmlRsTestChrome from './rs-test/rs-test-chrome.html';
import htmlRsTestClient from './rs-test/rs-test-client.html';
import htmlRsTestClasses from './rs-test/rs-test-classes.html';
import htmlRsTestOop from './rs-test/rs-test-oop.html';
import htmlRsTestFinal from './rs-test/rs-test-final.html';

// RS Test stage 2
import htmlRsTestTsBasics from './rs-test/rs-test-tsbasics.html';
import htmlRsTestTsAdvanced from './rs-test/rs-test-tsadvanced.html';
import htmlRsTestCodereview from './rs-test/rs-test-codereview.html';
import htmlRsTestSpa from './rs-test/rs-test-spa.html';
import htmlRsTestWebstorage from './rs-test/rs-test-webstorage.html';
import htmlRsTestFp from './rs-test/rs-test-fp.html';
import htmlRsTestAsyncjs from './rs-test/rs-test-asyncjs.html';
import htmlRsTestWebsecurity from './rs-test/rs-test-websecurity.html';
import htmlRsTestRestful from './rs-test/rs-test-restful.html';
import htmlRsTestEventloop from './rs-test/rs-test-eventloop.html';
import htmlRsTestTesting from './rs-test/rs-test-testing.html';
import htmlRsTestError from './rs-test/rs-test-error.html';
import htmlRsTestDp from './rs-test/rs-test-dp.html';

// RS Test stage 3 React
import htmlRsTest1Components from './rs-test/rs-test-react1-components.html';
import htmlRsTest2Errboundary from './rs-test/rs-test-react2-errboundary.html';

// Neoflex test
import htmlNftest from './neoflex/nf-test.html';
import htmlEftest1 from './neoflex/ef-test1.html';

// Яндекс test
import htmlYaFront from './yandex/ya-front.html';

// hh.ru test
import htmlHhGit1 from './hh/hh-git1.html';
import htmlHhGit2 from './hh/hh-git2.html';
import htmlHhEng from './hh/hh-eng.html';

// Создаем массив страниц с Aside меню
const htmlPages = [htmlEduRss2024stage3, htmlEduRss2024stage0, htmlEduCourses, htmlEduCoursesLearned, htmlEduLearning, htmlEduRss, htmlEduRss2024stage2, htmlEduRss2023stage1, htmlEduDsr2023net, htmlEduRss2023stage0, htmlEduRss2022stage3, htmlEduRss2022stage1, htmlEduRss2022stage0, htmlEduQuiz];

// Создаем массив страниц с лекциями DSR
const htmlDsrLec = [htmlDsrLec0, htmlDsrLec1, htmlDsrLec2, htmlDsrLec3,
htmlDsrLec4, htmlDsrLec5, htmlDsrLec6, htmlDsrLec7, htmlDsrLec8, htmlDsrLec9,
htmlDsrLec10, htmlDsrLec11, htmlDsrLec12];

// Создаем массив страниц с практикой DSR
const htmlDsrWshop = [htmlDsrWshop1, htmlDsrWshop2, htmlDsrWshop3, htmlDsrWshop4,
htmlDsrWshop5, htmlDsrWshop6];

// Создаем массив страниц с экзаменом DSR
const htmlDsrExams = [htmlDsrExam];

// Создаем массив страниц с тестом Neoflex
const htmlNeoflex = [htmlNftest, htmlEftest1];

// Создаем массив страниц с тестом Яндекс
const htmlYandex = [htmlYaFront];

// Создаем массив страниц с тестом hh.ru
const htmlHh = [htmlHhGit1, htmlHhGit2, htmlHhEng];

// Создаем массив страниц с тестами RSSchool
const htmlRsTest = [htmlRsTestRss, htmlRsTestGit, htmlRsTestFundInternet,
htmlRsTestHtmlBasics, htmlRsTestCssBasics,
htmlRsTestCssFlex,
htmlRsTestJsBasics, htmlRsTestJsTypes, htmlRsTestJsScope, htmlRsTestJsEvolution,
htmlRsTestCssflexbox,
htmlRsTestCssGrid, htmlRsTestSass, htmlRsTestCssModules, htmlRsTestMediaqueries,
htmlRsTestHtmlform, htmlRsTestDomapi, htmlRsTestDomevents, htmlRsTestGitgithub,
htmlRsTestAlgorithms, htmlRsTestCleancode, htmlRsTestLinters,
htmlRsTestModules, htmlRsTestBundlers, htmlRsTestChrome, htmlRsTestClient,
htmlRsTestClasses, htmlRsTestOop, htmlRsTestFinal,
htmlRsTestTsBasics, htmlRsTestTsAdvanced, htmlRsTestCodereview, htmlRsTestSpa,
htmlRsTestWebstorage, htmlRsTestFp, htmlRsTestAsyncjs, htmlRsTestWebsecurity,
htmlRsTestRestful, htmlRsTestEventloop, htmlRsTestTesting, htmlRsTestError,
htmlRsTestDp, htmlRsTest1Components, htmlRsTest2Errboundary];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink(asideItems) {
  const currentContent = main;

  // собрать все ссылки в aside menu
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlPages[index];
      switch (htmlPages[index]) {
        case htmlEduDsr2023net:
          dsrLinks();
          break;
        case htmlEduQuiz:
          quizLinks();
          break;
      }
    });
  })
}

function dsrLinks() {
  const currentContent = document.querySelector('#edu');

  const dsrLectures = document.querySelectorAll('.js-dsr-lecture');
  if (dsrLectures) {
    for (let i = 0; i < dsrLectures.length; i++) {
      dsrLectures[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsrLec[i]) {
          currentContent.innerHTML = htmlDsrLec[i];
          backToDsr();
        }
      });
    }
  }

  const dsrWshops = document.querySelectorAll('.js-dsr-workshop');
  if (dsrWshops) {
    for (let i = 0; i < dsrWshops.length; i++) {
      dsrWshops[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsrWshop[i]) {
          currentContent.innerHTML = htmlDsrWshop[i];
          backToDsr();
        }
      });
    }
  }
}

function backToDsr() {
  const currentContent = document.querySelector('#edu');

  const linkToDsr = document.getElementById('link-to-dsr2023net');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduDsr2023net;
      dsrLinks();
    });
  }
}

function quizLinks() {
  const currentContent = document.querySelector('#edu');

  const rsTests = document.querySelectorAll('.js-rs-test');
  if (rsTests) {
    for (let i = 0; i < rsTests.length; i++) {
      rsTests[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlRsTest[i]) {
          currentContent.innerHTML = htmlRsTest[i];
          backToQuiz();
        }
      });
    }
  }

  const dsrExam = document.querySelectorAll('.dsr-exam');
  if (dsrExam) {
    for (let i = 0; i < dsrExam.length; i++) {
      dsrExam[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsrExams[i]) {
          currentContent.innerHTML = htmlDsrExams[i];
          backToQuiz();
        }
      });
    }
  }

  const neoflexTest = document.querySelectorAll('.neoflex-test');
  if (neoflexTest) {
    for (let i = 0; i < neoflexTest.length; i++) {
      neoflexTest[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlNeoflex[i]) {
          currentContent.innerHTML = htmlNeoflex[i];
          backToQuiz();
        }
      });
    }
  }

  const yandexTest = document.querySelectorAll('.yandex-test');
  if (yandexTest) {
    for (let i = 0; i < yandexTest.length; i++) {
      yandexTest[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (yandexTest[i]) {
          currentContent.innerHTML = htmlYandex[i];
          backToQuiz();
        }
      });
    }
  }

  const hhTest = document.querySelectorAll('.hh-test');
  if (hhTest) {
    for (let i = 0; i < hhTest.length; i++) {
      hhTest[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlHh[i]) {
          currentContent.innerHTML = htmlHh[i];
          backToQuiz();
        }
      });
    }
  }
}

function backToQuiz() {
  const currentContent = document.querySelector('#edu');

  const linkToQuiz = document.getElementById('link-to-quiz');
  if (linkToQuiz) {
    linkToQuiz.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduQuiz;
      quizLinks();
    });
  }
}
