/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-front-yt.js...
import dataFrontYtRus from './data/data-front-yt';
import dataFrontYtEng from './data/data-front-yt-eng';
import dataFrontYtSrb from './data/data-front-yt-srb';
import dataFrontYtCze from './data/data-front-yt-cze';
import dataYtPython from './data/data-yt-py';
import dataYtCsharp from './data/data-yt-csharp';
import dataYtAlgorithm from './data/data-yt-alorithm';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataFrontYtRus, dataFrontYtEng, dataFrontYtSrb, dataFrontYtCze,
  dataYtPython, dataYtCsharp, dataYtAlgorithm];

// 3. Создаем массив dataYt из массива dataArray
const dataYt = [].concat(...dataArray);

export default function createInput() {
  return dataYt;
}
