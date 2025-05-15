/** ***************
Функция sortBooks сортирует книги по году, автору и названию
**************** */
export default function sortBooks(books) {
  books.sort((a, b) => {

    // если поля нет, то задаем значение по умолчанию
    const a1 = a.year ? a.year : 0;
    const b1 = b.year ? b.year : 0;
    const a2 = a.author ? a.author : '';
    const b2 = b.author ? b.author : '';
    const a3 = a.title ? a.title : '';
    const b3 = b.title ? b.title : '';
    // ---------------------------

    if (a1 === b1) {
      // Если год одинаковый то сортировать по автору
      if (a2 === b2) {
        // Если автор одинаковый то сортировать по названию
        return a3.localeCompare(b3, 'en');
      }
      // Иначе сортировать по автору
      return a2.localeCompare(b2, 'en');
    }
    // Иначе сортировать по году
    return a1 - b1;
  });
  return books;
}

/* localeCompare возвращает
-1 если первая строка должна быть до второй строки
0, если две строки равны
1 если первая строка должна быть после второй строки
*/
