import htmlPostcross from './elem-postcross.html';
import htmlInterview from './elem-interview.html';
import htmlMetalampFrontend1 from './elem-metalamp-frontend1.html';
import htmlMetalampFrontend2 from './elem-metalamp-frontend2.html';
import htmlMetalampFrontend3 from './elem-metalamp-frontend3.html';
import htmlMetalampFrontend4 from './elem-metalamp-frontend4.html';
import htmlMetalampFrontend5 from './elem-metalamp-frontend5.html';
import htmlMetalampFaq from './elem-metalamp-faq.html';
import htmlMetalampErrors from './elem-metalamp-errors.html';
import htmlMetalampEmployment from './elem-metalamp-employment.html';
import htmlMetalampIntro from './elem-metalamp-intro.html';
import contentOrder from '../../../../js/order';

// ссылки для aside menu
export function pageLink() {
  const currentContent = document.querySelector('#vacancy');

  const asideInterview = document.getElementById('vacancy-interview');
  if (asideInterview) {
    asideInterview.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlInterview;
      contentOrder();
    });
  }

  const asidePostcross = document.getElementById('vacancy-postcross');
  if (asidePostcross) {
    asidePostcross.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlPostcross;
      contentOrder();
    });
  }
}

// ссылки для страницы metlamp
export function metalampLinks() {
  const currentContent = document.querySelector('#vacancy');

  const metalampFrontend1 = document.getElementById('metalamp-frontend1');
  if (metalampFrontend1) {
    metalampFrontend1.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFrontend1;
    });
  }

  const metalampFrontend2 = document.getElementById('metalamp-frontend2');
  if (metalampFrontend2) {
    metalampFrontend2.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFrontend2;
    });
  }

  const metalampFrontend3 = document.getElementById('metalamp-frontend3');
  if (metalampFrontend3) {
    metalampFrontend3.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFrontend3;
    });
  }

  const metalampFrontend4 = document.getElementById('metalamp-frontend4');
  if (metalampFrontend4) {
    metalampFrontend4.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFrontend4;
    });
  }

  const metalampFrontend5 = document.getElementById('metalamp-frontend5');
  if (metalampFrontend5) {
    metalampFrontend5.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFrontend5;
    });
  }

  const metalampFaq = document.getElementById('metalamp-faq');
  if (metalampFaq) {
    metalampFaq.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampFaq;
    });
  }

  const metalampErrors = document.getElementById('metalamp-errors');
  if (metalampErrors) {
    metalampErrors.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampErrors;
    });
  }

  const metalampEmployment = document.getElementById('metalamp-employment');
  if (metalampEmployment) {
    metalampEmployment.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampEmployment;
    });
  }

  const metalampIntro = document.getElementById('metalamp-intro');
  if (metalampIntro) {
    metalampIntro.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = htmlMetalampIntro;
    });
  }
}
