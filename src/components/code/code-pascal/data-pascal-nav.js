import showPascalBase from './pascal-base/pascal-base';
import showPascalItff from './pascal-itff/pascal-itff';

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
];
