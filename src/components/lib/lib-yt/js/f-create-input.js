/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-front-yt.js...
import dataFrontYtRus from './data/data-front-yt';
import dataFrontYtEng from './data/data-front-yt-eng';
import dataYtBase from './data/data-yt-base';
import dataYtAlg from './data/data-yt-alg';
import dataYtSport from './data/data-yt-sport';
import dataYtAsm from './data/data-yt-asm';
import dataYtC from './data/data-yt-c';
import dataYtCpp from './data/data-yt-cpp';
import dataYtCsharp from './data/data-yt-csharp';
import dataYtPascal from './data/data-yt-pascal';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataFrontYtRus, dataFrontYtEng, dataYtBase, dataYtAlg, dataYtSport, dataYtAsm, dataYtC, dataYtCpp, dataYtCsharp, dataYtPascal];

// 3. Создаем массив dataYt из массива dataArray
const dataYt = [].concat(...dataArray);

export default function createInput() {
  return dataYt;
}
