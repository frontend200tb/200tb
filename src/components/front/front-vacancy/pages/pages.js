/******************
Функция pageLink вешает обработчик клика на элементы asideMenu
*******************/
import {main} from './../js/f-create-aside';

// Aside
import htmlVacancy from './elem-vacancy.html';
import htmlEpam from './elem-epam.html';
import htmlDsr from './elem-dsr.html';
import htmlNeoflex from './elem-neoflex.html';
import htmlYandex from './elem-yandex.html';
import htmlOzon from './elem-ozon.html';
import htmlAvito from './elem-avito.html';
import htmlSber from './elem-sber.html';
import htmlTbank from './elem-tbank.html';
import htmlT1 from './elem-t1.html';
import htmlInterview from './elem-interview.html';
import htmlPostcross from './elem-postcross.html';
import htmlInvite from './elem-invite.html';
import htmlRefuse from './elem-refuse.html';
import htmlNoanswer from './elem-noanswer.html';
import htmlSkills from './elem-skills.html';

// массив страниц из aside menu
const aside = [
  htmlVacancy,
  htmlEpam,
  htmlDsr,
  htmlNeoflex,
  htmlYandex,
  htmlOzon,
  htmlAvito,
  htmlSber,
  htmlTbank,
  htmlT1,
  htmlInterview,
  htmlPostcross,
  htmlInvite,
  htmlRefuse,
  htmlNoanswer,
  htmlSkills,
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
