/** ***************
Функция createList возвращает список <ol>...</ol>
**************** */
/*
Алгоритм работы
1. Функция createList принимает массив данных
2. Создаем массив parentDiv для элементов li списка
3. Создаем элемент elementLi списка
4. Проверяем что пришло в данных
5. Записываем данные в элемент списка
6. Добавим элемент elementLi в массив parentDiv
7. Создадим элемент elementUl
*/

// 1. Функция createList принимает массив данных
export default function createList(data) {
  // 2. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // Если данные содержат только заголовок, то элемент списка
    // не создаем и переходим к следующим данным
    if (!data[i].link && !data[i].text && !data[i].details) {
      continue;
    }

    // 3. Создаем элемент elementLi списка
    const elementLi = document.createElement('li');

    // 4. Проверяем что пришло в данных
    let elementLink = '';
    if (data[i].link && data[i].name) {
      elementLink = `<a href="${data[i].link}">${data[i].name}</a>`;
    }

    let elementText = '';
    if (data[i].text) {
      if (elementLink) {
        elementText = `<div>${data[i].text}</div>`;
      } else {
        elementText = `${data[i].text}`;
      }
    }

    let elementDetail = '';
    if (data[i].details && data[i].summary) {
      elementDetail = `<details><summary>${data[i].summary}</summary>${data[i].details}</details>`;
    }

    // 5. Записываем данные в элемент списка
    elementLi.innerHTML = elementLink + elementText + elementDetail;

    // 6. Добавим элемент elementLi в массив parentDiv
    parentDiv.push(elementLi);

    function addColor() {
      elementLi.classList.add('over');
    }

    function removeColor() {
      elementLi.classList.remove('over');
    }
  }

  // 7. Создадим элемент elementUl
  const elementUl = document.createElement('ol');
  elementUl.append(...parentDiv);

  return elementUl;
}
