import showGustokashin from './gustokashin/gustokashin';
import showFatin       from './fatin/fatin';
import showFtl         from './ftl/ftl';
import show1580        from './1580/1580';
import showStepik      from './stepik/stepik';
import showAlgBooks    from './alg-books/alg-books';
import showAlgCourses  from './alg-courses/alg-courses';

export const dataConspectNav = [
  {
    url: 'gustokashin.html',
    text: 'МГ',
    content: '<alg-gustokashin></alg-gustokashin>',
    act() {
      showGustokashin();
    },
  },
  {
    url: 'fatin.html',
    text: 'МФ',
    content: '<alg-fatin></alg-fatin>',
    act() {
      showFatin();
    },
  },
  {
    url: 'ftl.html',
    text: 'ФТЛ',
    content: '<alg-ftl></alg-ftl>',
    act() {
      showFtl();
    },
  },
  {
    url: '1580.html',
    text: '1580',
    content: '<alg-1580></alg-1580>',
    act() {
      show1580();
    },
  },
  {
    url: 'stepik.html',
    text: 'stepik',
    content: '<alg-stepik></alg-stepik>',
    act() {
      showStepik();
    },
  },
  {
    url: 'alg-books.html',
    text: 'Книги',
    content: '<alg-books></alg-books>',
    act() {
      showAlgBooks();
    },
  },
  {
    url: 'alg-courses.html',
    text: 'Курсы',
    content: '<alg-courses></alg-courses>',
    act() {
      showAlgCourses();
    },
  },
];
