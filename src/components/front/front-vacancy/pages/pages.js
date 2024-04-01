/*
Скрипт из файла page.js
Функция pageLink вешает обработчик клика на элементы asideMenu
*/

// Aside
import htmlVacancy from './elem-vacancy.html';
import htmlEpam from './elem-epam.html';
import htmlDsr from './elem-dsr.html';
import htmlNeoflex from './elem-neoflex.html';
import htmlYandex from './elem-yandex.html';
import htmlOzon from './elem-ozon.html';
import htmlAvito from './elem-avito.html';
import htmlTinkoff from './elem-tinkoff.html';
import htmlSber from './elem-sber.html';
import htmlInterview from './elem-interview.html';
import htmlPostcross from './elem-postcross.html';
import htmlInvite from './elem-invite.html';
import htmlRefuse from './elem-refuse.html';
import htmlSkills from './elem-skills.html';
import htmlTask from './elem-task.html';

// массив страниц из aside menu
const aside = [
  htmlVacancy,
  htmlEpam,
  htmlDsr,
  htmlNeoflex,
  htmlYandex,
  htmlOzon,
  htmlAvito,
  htmlTinkoff,
  htmlSber,
  htmlInterview,
  htmlPostcross,
  htmlInvite,
  htmlRefuse,
  htmlSkills,
  htmlTask,
];

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink() {
  const currentContent = document.querySelector('#vacancy');

  // собрать все ссылки в aside menu
  const asideItems = document.querySelectorAll('.aside a');

  // если ссылки в aside menu есть, то по клику показывать нужную страницу
  if (asideItems) {
    asideItems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        currentContent.innerHTML = aside[index];
      });
    })
  }
}
