import contentOrder from '../../../../js/order';
import rain from './rain';
import star from './star';
import './rain.scss';
import './star.scss';

// Aside
import htmlEduDsr2023net from './elem-edu-dsr2023net.html';
import htmlEduRss2023stage1 from './elem-edu-rss2023-stage1.html';
import htmlEduCourses from './elem-edu-courses.html';
import htmlEduCoursesLearned from './elem-edu-courseslearned.html';
import htmlEduLearning from './elem-edu-learning.html';
import htmlEduRss from './elem-edu-rss.html';
import htmlEduRss2022stage0 from './elem-edu-rss2022-stage0.html';
import htmlEduRss2022stage1 from './elem-edu-rss2022-stage1.html';
import htmlEduRss2022stage3 from './elem-edu-rss2022-stage3-angular.html';
import htmlEduRss2023stage0 from './elem-edu-rss2023-stage0.html';
import htmlEduQuiz from './elem-edu-quiz.html';
import htmlEduJsExamples from './elem-edu-jsexamples.html';

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

import htmlDsrWshop1 from './dsr/dsr2023net-workshop1.html';
import htmlDsrWshop2 from './dsr/dsr2023net-workshop2.html';

// RS Test
import htmlRsTestRss from './rs-test/rs-test-rss.html';
import htmlRsTestGit from './rs-test/rs-test-git.html';
import htmlRsTestFundInternet from './rs-test/rs-test-fundinternet.html';
import htmlRsTestJsBasics from './rs-test/rs-test-jsbasics.html';
import htmlRsTestJsTypes from './rs-test/rs-test-jstypes.html';
import htmlRsTestJsScope from './rs-test/rs-test-jsscope.html';
import htmlRsTestJsEvolution from './rs-test/rs-test-jsevolution.html';
import htmlRsTestHtmlBasics from './rs-test/rs-test-htmlbasics.html';
import htmlRsTestCssBasics from './rs-test/rs-test-cssbasics.html';
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

// Создаем массив страниц с Aside меню
const htmlPages = [htmlEduDsr2023net, htmlEduRss2023stage1, htmlEduCourses,
  htmlEduCoursesLearned, htmlEduLearning, htmlEduRss, htmlEduRss2022stage0,
  htmlEduRss2022stage1, htmlEduRss2022stage3, htmlEduRss2023stage0, htmlEduQuiz, htmlEduJsExamples];

// Создаем массив страниц с лекциями DSR
const htmlDsrLec = [htmlDsrLec0, htmlDsrLec1, htmlDsrLec2, htmlDsrLec3,
htmlDsrLec4, htmlDsrLec5, htmlDsrLec6, htmlDsrLec7, htmlDsrLec8, htmlDsrLec9];

// Создаем массив страниц с практикой DSR
const htmlDsrWshop = [htmlDsrWshop1, htmlDsrWshop2];

// Создаем массив страниц с тестами RSSchool
const htmlRsTest = [htmlRsTestRss, htmlRsTestGit, htmlRsTestFundInternet,
htmlRsTestJsBasics, htmlRsTestJsTypes, htmlRsTestJsScope, htmlRsTestJsEvolution,
htmlRsTestHtmlBasics, htmlRsTestCssBasics, htmlRsTestCssflexbox, htmlRsTestCssGrid,
htmlRsTestSass, htmlRsTestCssModules, htmlRsTestMediaqueries,
htmlRsTestHtmlform, htmlRsTestDomapi, htmlRsTestDomevents, htmlRsTestGitgithub,
htmlRsTestAlgorithms];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#edu');

  const asideCourses = document.getElementById('edu-courses');
  if (asideCourses) {
    asideCourses.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduCourses;
      contentOrder();
    });
  }

  const asideCourseslearned = document.getElementById('edu-courseslearned');
  if (asideCourseslearned) {
    asideCourseslearned.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduCoursesLearned;
      contentOrder();
    });
  }

  const asideLearning = document.getElementById('edu-learning');
  if (asideLearning) {
    asideLearning.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduLearning;
      contentOrder();
    });
  }

  const asideRss = document.getElementById('edu-rsschool');
  if (asideRss) {
    asideRss.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss;
      contentOrder();
    });
  }

  const asideRss2022stage0 = document.getElementById('edu-rss2022stage0');
  if (asideRss2022stage0) {
    asideRss2022stage0.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss2022stage0;
      contentOrder();
    });
  }

  const asideRss2022stage1 = document.getElementById('edu-rss2022stage1');
  if (asideRss2022stage1) {
    asideRss2022stage1.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss2022stage1;
      contentOrder();
    });
  }

  const asideRss2022stage3Angular = document.getElementById('edu-rss2022stage3angular');
  if (asideRss2022stage3Angular) {
    asideRss2022stage3Angular.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss2022stage3;
      contentOrder();
    });
  }

  const asideRss2023stage0 = document.getElementById('edu-rss2023stage0');
  if (asideRss2023stage0) {
    asideRss2023stage0.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss2023stage0;
      contentOrder();
    });
  }

  const asideRss2023stage1 = document.getElementById('edu-rss2023stage1');
  if (asideRss2023stage1) {
    asideRss2023stage1.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduRss2023stage1;
      contentOrder();
    });
  }

  const asideDsr2023net = document.getElementById('edu-dsr2023net');
  if (asideDsr2023net) {
    asideDsr2023net.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduDsr2023net;
      contentOrder();
      dsrLinks();
    });
  }

  const asideQuiz = document.getElementById('edu-quiz');
  if (asideQuiz) {
    asideQuiz.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduQuiz;
      rain();
      star();
      contentOrder();
      rsLinks();
    });
  }

  const asideJsExamples = document.getElementById('edu-jsexamples');
  if (asideJsExamples) {
    asideJsExamples.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduJsExamples;
    });
  }
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

  const linkToDsr = document.getElementById('edu-dsr');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduDsr2023net;
      contentOrder();
      dsrLinks();
    });
  }
}

function rsLinks() {
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
}

function backToQuiz() {
  const currentContent = document.querySelector('#edu');

  const linkToQuiz = document.getElementById('link-to-quiz');
  if (linkToQuiz) {
    linkToQuiz.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlEduQuiz;
      contentOrder();
      rsLinks();
    });
  }
}
