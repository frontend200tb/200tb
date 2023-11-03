import contentOrder from '../../../../js/order';
import htmlEduCourses from './elem-edu-courses.html';
import htmlEduCoursesLearned from './elem-edu-courseslearned.html';
import htmlEduLearning from './elem-edu-learning.html';
import htmlEduRss from './elem-edu-rss.html';
import htmlEduRss2022stage0 from './elem-edu-rss2022-stage0.html';
import htmlEduRss2022stage1 from './elem-edu-rss2022-stage1.html';
import htmlEduRss2022stage3 from './elem-edu-rss2022-stage3-angular.html';
import htmlEduRss2023stage0 from './elem-edu-rss2023-stage0.html';
import htmlEduDsr2023net from './elem-edu-dsr2023net.html';
import htmlEduQuiz from './elem-edu-quiz.html';
import htmlDsrLec0 from './dsr2023net-lecture0.html';
import htmlDsrLec1 from './dsr2023net-lecture1.html';
import htmlDsrLec2 from './dsr2023net-lecture2.html';
import htmlDsrLec3 from './dsr2023net-lecture3.html';
import htmlDsrLec4 from './dsr2023net-lecture4.html';
import htmlDsrLec5 from './dsr2023net-lecture5.html';
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
      contentOrder();
    });
  }
}

function dsrLinks() {
  const currentContent = document.querySelector('#edu');

  const dsrLecture0 = document.getElementById('dsr-lecture-0');
  if (dsrLecture0) {
    dsrLecture0.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec0;
      backToDsr();
    });
  }

  const dsrLecture1 = document.getElementById('dsr-lecture-1');
  if (dsrLecture1) {
    dsrLecture1.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec1;
      backToDsr();
    });
  }

  const dsrLecture2 = document.getElementById('dsr-lecture-2');
  if (dsrLecture2) {
    dsrLecture2.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec2;
       backToDsr();
   });
  }

  const dsrLecture3 = document.getElementById('dsr-lecture-3');
  if (dsrLecture3) {
    dsrLecture3.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec3;
      backToDsr();
    });
  }

  const dsrLecture4 = document.getElementById('dsr-lecture-4');
  if (dsrLecture4) {
    dsrLecture4.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec4;
      backToDsr();
    });
  }

  const dsrLecture5 = document.getElementById('dsr-lecture-5');
  if (dsrLecture5) {
    dsrLecture5.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlDsrLec5;
      backToDsr();
    });
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
