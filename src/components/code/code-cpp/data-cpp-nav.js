import showCppBase    from './cpp-base/cpp-base';
import showCppBooks   from './cpp-books/cpp-books';
import showCppCourses from './cpp-courses/cpp-courses';

export const dataCppNav = [
  {
    url: 'cpp-base.html',
    text: 'Основы',
    content: '<cpp-base></cpp-base>',
    act() {
      showCppBase();
    },
  },
  {
    url: 'cpp-books.html',
    text: 'Конспекты книг',
    content: '<cpp-books></cpp-books>',
    act() {
      showCppBooks();
    },
  },
  {
    url: 'cpp-courses.html',
    text: 'Конспекты курсов',
    content: '<cpp-courses></cpp-courses>',
    act() {
      showCppCourses();
    },
  },
];
