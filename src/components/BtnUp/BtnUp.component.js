/* eslint-disable no-use-before-define */
/** **************
Кнопка для каждой страницы сайта.
Кнопки изначально нет. Она появляется при прокрутке страницы.
По нажатию на кнопку происходит скролл к началу страницы
Кнопка располагается справа внизу страницы
****************** */
import './BtnUp.component.scss';

export default function BtnUpComponent() {
  const element = document.createElement('div');
  element.classList.add('btn-up', 'none');
  element.innerHTML = 'НАВЕРХ';
  element.addEventListener('click', scrollUp);
  window.addEventListener('scroll', () => scrollDown(element));

  render(element);

  return {element};
}

async function render(element) {
  const page = document.querySelector('#page');
  page.appendChild(element);
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function scrollDown(element) {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
  if (scrollY > 400) {
    element.classList.remove('none');
  } else {
    element.classList.add('none');
  }
}
