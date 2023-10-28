/** ***************
Функция createData возвращает объект data
**************** */
/*
Алгоритм работы
1. Импортируем массивы из файлов data-vacancy.js...
2. Создаем массив dataArray для импортированных массивов
3. Создаем массив с книгами dataBooks из массива dataArray
4. Создаем объект result
5. Проходим по массиву dataBooks
6. Создаем массив theme
7. Создаем массив книг для каждого элемента массива theme
8. Возвращаем объект result
*/

// 1. Импортируем массивы из файлов data-vacancy.js...
import dataVacancy from './data/data-vacancy';
import dataEpam from './data/data-epam';
import dataDsr from './data/data-dsr';
import dataNeoflex from './data/data-neoflex';
import dataYandex from './data/data-yandex';
import dataOzon from './data/data-ozon';
import dataAvito from './data/data-avito';
import dataTinkoff from './data/data-tinkoff';
import dataSber from './data/data-sber';
import dataMetalamp from './data/data-metalamp';
import dataSkills from './data/data-skills';
import dataRefuse from './data/data-refuse';
import dataFreelance from './data/data-freelance';
import dataCv from './data/data-cv';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataVacancy, dataEpam, dataDsr, dataNeoflex, dataYandex, dataOzon,
  dataAvito, dataTinkoff, dataSber, dataMetalamp, dataSkills, dataRefuse, dataFreelance,
  dataCv];

export default function createData() {
  // 3. Создаем массив с книгами dataBooks из массива dataArray
  const dataBooks = [].concat(...dataArray);

  // 4. Создаем объект result
  const result = {};

  // 5. Проходим по массиву dataBooks
  dataBooks.forEach((elem) => {
    // 6. Создаем массив theme
    if (elem.theme && !(elem.theme in result)) {
      result[elem.theme] = [];
    }

    // 5. Создаем заголовок h2 если его еще нет
    if (elem.header2 && !(elem.header2 in result[elem.theme])) {
      result[elem.theme][elem.header2] = [];
    }

    // 5. Создаем массив заголовков header3 для каждой темы
    if (elem.header3 && !(elem.header3 in result[elem.theme])) {
      result[elem.theme][elem.header3] = [];
    }

    // 8. Создаем массив для каждого элемента массива заголовков header3
    if (elem.theme && elem.header3) {
      result[elem.theme][elem.header3].push(elem);
    }
  });

  // 9. Возвращаем объект result
  return result;
}
