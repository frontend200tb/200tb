import showPascalBase  from './pascal-base/pascal-base';
import showPascalItff  from './pascal-itff/pascal-itff';
import showPascalBooks from './pascal-books/pascal-books';

export const dataPascalNav = [
  {
    url: 'pascal-base.html',
    text: 'Основы',
    content: '<pascal-base></pascal-base>',
    act() {
      showPascalBase();
    },
  },
  {
    url: 'pascal-itff.html',
    text: 'IT For Free',
    content: '<pascal-itff></pascal-itff>',
    act() {
      showPascalItff();
    },
  },
  {
    url: 'pascal-books.html',
    text: 'Конспекты книг',
    content: '<pascal-books></pascal-books>',
    act() {
      showPascalBooks();
    },
  },
];
