/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-lib-vk.js...
import dataVkFront from './data/data-vk-front';
import dataVkBase from './data/data-vk-base';
import dataVkAlg from './data/data-vk-alg';
import dataVkSport from './data/data-vk-sport';
import dataVkAsm from './data/data-vk-asm';
import dataVkC from './data/data-vk-c';
import dataVkCpp from './data/data-vk-cpp';
import dataVkCsharp from './data/data-vk-csharp';
import dataVkPascal from './data/data-vk-pascal';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [dataVkFront, dataVkBase, dataVkAlg, dataVkSport, dataVkAsm, dataVkC, dataVkCpp, dataVkCsharp, dataVkPascal];

// 3. Создаем массив dataYt из массива dataArray
const dataVk = [].concat(...dataArray);

export default function createInput() {
  return dataVk;
}
