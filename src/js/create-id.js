// Функция createId создает id из имени
function createId(str) {
  // удалить всё, кроме букв и цифр
  return `edu-${str.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
}

// Функция createId2 создает id из счетчика
let idNameSuffix = 1;
function createId2(str) {
  str = idNameSuffix;
  idNameSuffix++;
  return `base-${str}`;
}
