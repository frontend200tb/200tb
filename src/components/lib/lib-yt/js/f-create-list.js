/** ***************
Функция createList возвращает список элементов li с youtube каналами для элемента aside меню
**************** */
/*
Алгоритм работы
1. Функция createList принимает элемент список каналов
2. Отсортируем каналы по названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка каналов
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

// 1. Функция createList принимает элемент список каналов
export default function createList(data) {
  // 2. Отсортируем каналы по названию
  data.sort((a, b) => a.title.localeCompare(b.title, 'en'));

  // 3. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // 4. Создадим элемент elementLi списка каналов
    const elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);

    elementLi.innerHTML = `
    <a href="${data[i].link}" target="_blank">${data[i].title}</a>
    <div>${data[i].author}</div>
    <div>${data[i].city}</div>
    <div>${data[i].country}</div>
    <div><a href ="${data[i].site}" target="_blank">${data[i].site}</a></div>
    <div>${data[i].dateFirstVideo} - ${data[i].dateLastVideo}</div>
    <div>${data[i].amountVideos} видео</div>`;

    // 5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);

    function addColor() {
      elementLi.classList.add('over');
    }

    function removeColor() {
      elementLi.classList.remove('over');
    }
  }

  return parentDiv;
}
