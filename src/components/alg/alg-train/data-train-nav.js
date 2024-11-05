import showFatin from './fatin/fatin';
import showGustokashin from './gustokashin/gustokashin';

export const dataTrainNav = [
  {
    url: 'fatin.html',
    text: 'Фатин',
    content: '<alg-fatin></alg-fatin>',
    act() {
      showFatin();
    },
  },
  {
    url: 'gustokashin.html',
    text: 'Густокашин',
    content: '<alg-gustokashin></alg-gustokashin>',
    act() {
      showGustokashin();
    },
  },
];
