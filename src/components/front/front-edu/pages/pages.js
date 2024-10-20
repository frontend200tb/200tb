/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import {main} from './../js/f-create-aside';

// Aside
import htmlEduDsr2024cpp from './elem-edu-dsr2024cpp.html';
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

// DSR 2023 lectures
import htmlDsr2023Lec0 from './dsr2023net/dsr2023net-lecture0.html';
import htmlDsr2023Lec1 from './dsr2023net/dsr2023net-lecture1.html';
import htmlDsr2023Lec2 from './dsr2023net/dsr2023net-lecture2.html';
import htmlDsr2023Lec3 from './dsr2023net/dsr2023net-lecture3.html';
import htmlDsr2023Lec4 from './dsr2023net/dsr2023net-lecture4.html';
import htmlDsr2023Lec5 from './dsr2023net/dsr2023net-lecture5.html';
import htmlDsr2023Lec6 from './dsr2023net/dsr2023net-lecture6.html';
import htmlDsr2023Lec7 from './dsr2023net/dsr2023net-lecture7.html';
import htmlDsr2023Lec8 from './dsr2023net/dsr2023net-lecture8.html';
import htmlDsr2023Lec9 from './dsr2023net/dsr2023net-lecture9.html';
import htmlDsr2023Lec10 from './dsr2023net/dsr2023net-lecture10.html';
import htmlDsr2023Lec11 from './dsr2023net/dsr2023net-lecture11.html';
import htmlDsr2023Lec12 from './dsr2023net/dsr2023net-lecture12.html';

// DSR 2023 workshops
import htmlDsr2023Wshop1 from './dsr2023net/dsr2023net-workshop1.html';
import htmlDsr2023Wshop2 from './dsr2023net/dsr2023net-workshop2.html';
import htmlDsr2023Wshop3 from './dsr2023net/dsr2023net-workshop3.html';
import htmlDsr2023Wshop4 from './dsr2023net/dsr2023net-workshop4.html';
import htmlDsr2023Wshop5 from './dsr2023net/dsr2023net-workshop5.html';
import htmlDsr2023Wshop6 from './dsr2023net/dsr2023net-workshop6.html';

// DSR 2024 lectures
import htmlDsr2024Lec1 from './dsr2024cpp/dsr2024cpp-lecture1.html';
import htmlDsr2024Lec2 from './dsr2024cpp/dsr2024cpp-lecture2.html';
import htmlDsr2024Lec3 from './dsr2024cpp/dsr2024cpp-lecture3.html';
import htmlDsr2024Lec4 from './dsr2024cpp/dsr2024cpp-lecture4.html';

// DSR Test
import htmlDsrCsharp from './dsr-test/dsr-csharptest.html';
import htmlDsrC from './dsr-test/dsr-ctest.html';

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
const htmlPages = [htmlEduDsr2024cpp, htmlEduCourses, htmlEduCoursesLearned, htmlEduLearning, htmlEduRss, htmlEduRss2024stage2, htmlEduRss2023stage1, htmlEduDsr2023net, htmlEduRss2023stage0, htmlEduRss2022stage3, htmlEduRss2022stage1, htmlEduRss2022stage0, htmlEduQuiz];

// Создаем массив страниц с лекциями DSR 2023
const htmlDsr2023Lec = [htmlDsr2023Lec0, htmlDsr2023Lec1, htmlDsr2023Lec2, htmlDsr2023Lec3,
htmlDsr2023Lec4, htmlDsr2023Lec5, htmlDsr2023Lec6, htmlDsr2023Lec7, htmlDsr2023Lec8, htmlDsr2023Lec9,
htmlDsr2023Lec10, htmlDsr2023Lec11, htmlDsr2023Lec12];

// Создаем массив страниц с практикой DSR 2023
const htmlDsr2023Wshop = [htmlDsr2023Wshop1, htmlDsr2023Wshop2, htmlDsr2023Wshop3, htmlDsr2023Wshop4,
htmlDsr2023Wshop5, htmlDsr2023Wshop6];

// Создаем массив страниц с лекциями DSR 2024
const htmlDsr2024Lec = [htmlDsr2024Lec1, htmlDsr2024Lec2, htmlDsr2024Lec3,
htmlDsr2024Lec4];

// Создаем массив страниц с экзаменом DSR
const htmlDsrTest = [htmlDsrCsharp, htmlDsrC];

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
          dsr2023Links();
          break;
        case htmlEduDsr2024cpp:
          dsr2024Links();
          break;
        case htmlEduQuiz:
          quizLinks();
          break;
      }
    });
  })
}

function dsr2023Links() {
  const currentContent = document.querySelector('#edu');

  const dsrLectures = document.querySelectorAll('.js-dsr-lecture');
  if (dsrLectures) {
    for (let i = 0; i < dsrLectures.length; i++) {
      dsrLectures[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsr2023Lec[i]) {
          currentContent.innerHTML = htmlDsr2023Lec[i];
          backToDsr2023();
        }
      });
    }
  }

  const dsrWshops = document.querySelectorAll('.js-dsr-workshop');
  if (dsrWshops) {
    for (let i = 0; i < dsrWshops.length; i++) {
      dsrWshops[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsr2023Wshop[i]) {
          currentContent.innerHTML = htmlDsr2023Wshop[i];
          backToDsr2023();
        }
      });
    }
  }
}

function dsr2024Links() {
  const currentContent = document.querySelector('#edu');

  const dsrLectures = document.querySelectorAll('.js-dsr-lecture');
  if (dsrLectures) {
    for (let i = 0; i < dsrLectures.length; i++) {
      dsrLectures[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsr2024Lec[i]) {
          currentContent.innerHTML = htmlDsr2024Lec[i];
          backToDsr2024();
        }
      });
    }
  }
}

function backToDsr2023() {
  const currentContent = document.querySelector('#edu');

  const linkToDsr = document.getElementById('link-to-dsr2023net');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduDsr2023net;
      dsr2023Links();
    });
  }
}

function backToDsr2024() {
  const currentContent = document.querySelector('#edu');

  const linkToDsr = document.getElementById('link-to-dsr2024cpp');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduDsr2024cpp;
      dsr2024Links();
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

  const dsrTest = document.querySelectorAll('.dsr-test');
  if (dsrTest) {
    for (let i = 0; i < dsrTest.length; i++) {
      dsrTest[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlDsrTest[i]) {
          currentContent.innerHTML = htmlDsrTest[i];
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
