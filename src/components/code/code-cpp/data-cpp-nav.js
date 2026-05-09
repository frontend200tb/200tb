import showCppBase     from './cpp-base/cpp-base';
import showCppBooks    from './cpp-books/cpp-books';
import showCppCourses  from './cpp-courses/cpp-courses';
import showCppJavarush from './cpp-javarush/cpp-javarush';

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
  {
    url: 'cpp-javarush.html',
    text: 'Javarush',
    content: '<cpp-javarush></cpp-javarush>',
    act() {
      showCppJavarush();
    },
  },
];
