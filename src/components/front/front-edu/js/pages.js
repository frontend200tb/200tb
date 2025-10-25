/*
Функция pageLink вешает обработчик клика на элементы asideMenu
*/
import {pages, htmlPages} from './data-pages';

// Функция pageLink вешает обработчик клика на элементы asideMenu
export default function pageLink(asideItems, currentContent) {

  // собрать все ссылки в aside menu
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        currentContent.innerHTML = pages[index];
        switch (index) {
          case 0: // htmlVgu2025Lec
            vgu2025Links();
            break;
          case 1: // htmlDsr2024Lec
            dsr2024Links();
            break;
          case 2: // htmlVgu2024Lec
            vgu2024Links();
            break;
          case 3: // htmlDsr2023Lec
            dsr2023Links();
            break;
          case 14: // htmlEduQuiz
            quizLinks();
            break;
        }
      }
    });
  })
}


// 2025 ВГУ Углубленный C++
function vgu2025Links() {
  const currentContent = document.querySelector('#edu');

  const vguLectures = document.querySelectorAll('.js-vgu2025-cpp');
  if (vguLectures) {
    for (let i = 0; i < vguLectures.length; i++) {
      vguLectures[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlVgu2025Lec[i]) {
          currentContent.innerHTML = htmlPages.htmlVgu2025Lec[i];
          backToVgu2025();
        }
      });
    }
  }
}

function backToVgu2025() {
  const currentContent = document.querySelector('#edu');

  const linkToVgu = document.getElementById('link-to-vgu2025cpp');
  if (linkToVgu) {
    linkToVgu.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[0]) {
        currentContent.innerHTML = pages[0];
        vgu2025Links();
      }
    });
  }
}


// 2024 DSR C++: Начала программирования
function dsr2024Links() {
  const currentContent = document.querySelector('#edu');
  const dsrLectures = document.querySelectorAll('.js-dsr-lecture');
  if (dsrLectures) {
    for (let i = 0; i < dsrLectures.length; i++) {
      dsrLectures[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlDsr2024Lec[i]) {
          currentContent.innerHTML = htmlPages.htmlDsr2024Lec[i];
          backToDsr2024();
        }
      });
    }
  }
}

function backToDsr2024() {
  const currentContent = document.querySelector('#edu');

  const linkToDsr = document.getElementById('link-to-dsr2024cpp');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[1]) {
        currentContent.innerHTML = pages[1];
        dsr2024Links();
      }
    });
  }
}

// 2024 ВГУ Администрирование компьютерных сетей
function vgu2024Links() {
  const currentContent = document.querySelector('#edu');

  const vguLectures = document.querySelectorAll('.js-vgu-nets');
  if (vguLectures) {
    for (let i = 0; i < vguLectures.length; i++) {
      vguLectures[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlVgu2024Lec[i]) {
          currentContent.innerHTML = htmlPages.htmlVgu2024Lec[i];
          backToVgu2024();
        }
      });
    }
  }
}

function backToVgu2024() {
  const currentContent = document.querySelector('#edu');

  const linkToVgu = document.getElementById('link-to-vgu2024nets');
  if (linkToVgu) {
    linkToVgu.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[2]) {
        currentContent.innerHTML = pages[2];
        vgu2024Links();
      }
    });
  }
}

// 2023 DSR .Net School
function dsr2023Links() {
  const currentContent = document.querySelector('#edu');

  const dsrLectures = document.querySelectorAll('.js-dsr-lecture');
  if (dsrLectures) {
    for (let i = 0; i < dsrLectures.length; i++) {
      dsrLectures[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlDsr2023Lec[i]) {
          currentContent.innerHTML = htmlPages.htmlDsr2023Lec[i];
          backToDsr2023();
        }
      });
    }
  }

  const dsrWshops = document.querySelectorAll('.js-dsr-workshop');
  if (dsrWshops) {
    for (let i = 0; i < dsrWshops.length; i++) {
      dsrWshops[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlDsr2023Wshop[i]) {
          currentContent.innerHTML = htmlPages.htmlDsr2023Wshop[i];
          backToDsr2023();
        }
      });
    }
  }
}

function backToDsr2023() {
  const currentContent = document.querySelector('#edu');

  const linkToDsr = document.getElementById('link-to-dsr2023net');
  if (linkToDsr) {
    linkToDsr.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[3]) {
        currentContent.innerHTML = pages[3];
        dsr2023Links();
      }
    });
  }
}

function quizLinks() {
  const currentContent = document.querySelector('#edu');

  const rsTests = document.querySelectorAll('.js-rs-test');
  if (rsTests) {
    for (let i = 0; i < rsTests.length; i++) {
      rsTests[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlRsTest[i]) {
          currentContent.innerHTML = htmlPages.htmlRsTest[i];
          backToQuiz();
        }
      });
    }
  }

  const dsrTest = document.querySelectorAll('.dsr-test');
  if (dsrTest) {
    for (let i = 0; i < dsrTest.length; i++) {
      dsrTest[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlDsrTest[i]) {
          currentContent.innerHTML = htmlPages.htmlDsrTest[i];
          backToQuiz();
        }
      });
    }
  }

  const neoflexTest = document.querySelectorAll('.neoflex-test');
  if (neoflexTest) {
    for (let i = 0; i < neoflexTest.length; i++) {
      neoflexTest[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlNeoflex[i]) {
          currentContent.innerHTML = htmlPages.htmlNeoflex[i];
          backToQuiz();
        }
      });
    }
  }

  const yandexTest = document.querySelectorAll('.yandex-test');
  if (yandexTest) {
    for (let i = 0; i < yandexTest.length; i++) {
      yandexTest[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlYandex[i]) {
          currentContent.innerHTML = htmlPages.htmlYandex[i];
          backToQuiz();
        }
      });
    }
  }

  const hhTest = document.querySelectorAll('.hh-test');
  if (hhTest) {
    for (let i = 0; i < hhTest.length; i++) {
      hhTest[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (htmlPages.htmlHh[i]) {
          currentContent.innerHTML = htmlPages.htmlHh[i];
          backToQuiz();
        }
      });
    }
  }
}

function backToQuiz() {
  const currentContent = document.querySelector('#edu');

  const linkToQuiz = document.getElementById('link-to-quiz');
  if (linkToQuiz) {
    linkToQuiz.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[14]) {
        currentContent.innerHTML = pages[14];
        quizLinks();
      }
    });
  }
}
