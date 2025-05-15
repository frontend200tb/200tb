/** ***************
Функция createCategory принимает массив input, создает и возвращает объект category
**************** */
/*
Алгоритм работы
1. Создаем объект result
2. Проходим по входному массиву
  2.1 Определим категорию для menu-nav по теме
  2.2 Если у vk канала есть тема и этой темы нет в массиве тем то добавить
  2.3 Создаем массив каналов для каждого элемента массива category
3. Возвращаем объект result
*/

export default function createCategory(data) {
  // 1. Создаем объект result
  const result = [];

  // 2. Проходим по входному массиву data
  data.forEach((elem) => {
    // 2.2 Если у vk канала есть тема и этой темы нет в массиве тем то добавить
    if (elem.theme && !(elem.theme in result)) {
      result[elem.theme] = [];
    }

    // 6.2 Если есть тема то в тему добавить vk канал
    if (elem.theme) {
      result[elem.theme].push(elem);
    }
  });

  // 3. Возвращаем объект result
  return result;
}
