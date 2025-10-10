/**  TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
**/
const getHighestIndex = (array: number[]) => {
  const highestNumber = Math.max(...array);
  const highestIndex = array.indexOf(highestNumber);
  return highestIndex;
};

console.log(
  "The index of array's highest element=>",
  getHighestIndex([4, 2, 5, 6, 8, 9])
);
