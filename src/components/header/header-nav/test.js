/*
Скрипт реализует навигацию по страницам SPA
*/

/*
алгоритм работы
1. Определяем базовый адрес, относительно которого будут меняться адреса страниц
Смотрим на текущий адрес и он должен заканчиваться на "/index.html" или "/"
*/

import './style.scss';
import page1 from './pages/page1.html';
import page2 from './pages/page2.html';

const app = document.querySelector('.app');

// все переменные для навигации по страницам моего SPA записываем в объект MyHref
const MyHref = {};
MyHref.current = window.location.href;
MyHref.li = MyHref.current.lastIndexOf('index.html');

if (MyHref.current[MyHref.current.length - 1] === '/') {
  MyHref.base = MyHref.current;
}

if (MyHref.li !== '-1') {
  MyHref.base = MyHref.current.slice(0, MyHref.li);
}

// console.log(app);
// console.log('MyHref.current', MyHref.current);
// console.log('MyHref.base', MyHref.base);
// console.log('MyHref.li', MyHref.li);

// btns for app
const btns = document.createElement('div');
btns.classList.add('btns');

const home = document.createElement('div');
home.classList.add('btn');
home.innerText = 'Главная';
home.addEventListener('click', homeClick);
const btn1 = document.createElement('div');
btn1.classList.add('btn');
btn1.innerText = 'Страница 1';
btn1.addEventListener('click', btn1Click);
const btn2 = document.createElement('div');
btn2.classList.add('btn');
btn2.innerText = 'Страница 2';
btn2.addEventListener('click', btn2Click);

btns.appendChild(home);
btns.appendChild(btn1);
btns.appendChild(btn2);
app.appendChild(btns);

function homeClick() {
  main.innerHTML = '';
  changeHistory({ page: 'index' }, 'index.html')
}

function btn1Click() {
  main.innerHTML = page1;
  changeHistory({ page: 1 }, 'page1.html')

}

function btn2Click() {
  main.innerHTML = page2;
  changeHistory({ page: 2 }, 'page2.html')
}

function changeHistory(name = {}, url = '') {
  try {
    history.pushState(name, null, url);
  } catch (err) {
    console.log(err.text);
  }
  console.log(history);
  console.log(history.length);
  console.log(history.state);
  
}
// content for app
const main = document.createElement('main');
app.appendChild(main);

  console.log(history);
  console.log(history.length);
  console.log(history.state);
