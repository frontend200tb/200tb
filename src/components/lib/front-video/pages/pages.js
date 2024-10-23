// Импортируем страницы Video Algorithm
import htmlVAKulikov from './video-algorithm/1.html';
import showFrontVideo from './../front-video';

// Создаем массив страниц Video Algorithm
const htmlVA = [htmlVAKulikov];

// Функция добавляет обработчик клика для каждой страницы
export default function vaLinks() {

  const currentContent = document.querySelector('.front-video');

  const va = document.querySelectorAll('.video-algorithm');
  if (va) {
    for (let i = 0; i < va.length; i++) {
      va[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlVA[i]) {
          currentContent.innerHTML = htmlVA[i];
          backToVA();
        }
      });
    }
  }
}

function backToVA() {
  const linkToVA = document.getElementById('link-to-va');
  if (linkToVA) {
    linkToVA.addEventListener('click', (e) => {
      e.preventDefault();
      showFrontVideo();
      vaLinks();
    });
  }
}
