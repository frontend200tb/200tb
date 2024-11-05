import showAlgTheory from './alg-theory/alg-theory';
import showAlgTasks from './alg-tasks/alg-tasks';
import showAlgYandex from './alg-yandex/alg-yandex';

export const dataAlgNav = [
  {
    url: 'alg-theory.html',
    text: 'Теория',
    content: '<alg-theory></alg-theory>',
    act() {
      showAlgTheory();
    },
  },
  {
    url: 'alg-tasks.html',
    text: 'Задачи',
    content: '<alg-tasks></alg-tasks>',
    act() {
      showAlgTasks();
    },
  },
  {
    url: 'alg-yandex.html',
    text: 'Яндекс',
    content: '<alg-yandex></alg-yandex>',
    act() {
      showAlgYandex();
    },
  },
];
