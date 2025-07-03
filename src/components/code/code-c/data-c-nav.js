import showCBase    from './c-base/c-base';
import showCBooks   from './c-books/c-books';
import showCCourses from './c-courses/c-courses';

export const dataCNav = [
  {
    url: 'c-base.html',
    text: 'Основы',
    content: '<c-base></c-base>',
    act() {
      showCBase();
    },
  },
  {
    url: 'c-books.html',
    text: 'Конспекты книг',
    content: '<c-books></c-books>',
    act() {
      showCBooks();
    },
  },
  {
    url: 'c-courses.html',
    text: 'Конспекты курсов',
    content: '<c-courses></c-courses>',
    act() {
      showCCourses();
    },
  },
];
