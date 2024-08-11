/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-front-yt.js...
import dataFrontYtRus from './data/data-front-yt';
import dataFrontYtEng from './data/data-front-yt-eng';
import dataFrontYtSrb from './data/data-front-yt-srb';
import dataFrontYtCze from './data/data-front-yt-cze';
import dataYtBase from './data/data-yt-base';
import dataYtAlgorithm from './data/data-yt-alorithm';
import dataYtCpp from './data/data-yt-cpp';
import dataYtCsharp from './data/data-yt-csharp';
import dataYtPascal from './data/data-yt-pascal';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataFrontYtRus, dataFrontYtEng, dataFrontYtSrb, dataFrontYtCze, dataYtBase, dataYtAlgorithm, dataYtCpp, dataYtCsharp, dataYtPascal];

// 3. Создаем массив dataYt из массива dataArray
const dataYt = [].concat(...dataArray);

export default function createInput() {
  return dataYt;
}
