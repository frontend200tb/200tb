import showAsmBase from './asm-base/asm-base';
import showAsmBooks from './asm-books/asm-books';
import showAsmCourses from './asm-courses/asm-courses';

export const dataAsmNav = [
  {
    url: 'asm-base.html',
    text: 'Основы',
    content: '<asm-base></asm-base>',
    act() {
      showAsmBase();
    },
  },
  {
    url: 'asm-books.html',
    text: 'Конспекты книг',
    content: '<asm-books></asm-books>',
    act() {
      showAsmBooks();
    },
  },
  {
    url: 'asm-courses.html',
    text: 'Конспекты курсов',
    content: '<asm-courses></asm-courses>',
    act() {
      showAsmCourses();
    },
  },
];
