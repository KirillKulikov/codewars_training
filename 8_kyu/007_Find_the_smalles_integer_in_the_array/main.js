// ✅ Find the smallest integer in the array (Найдите наименьшее целое число в массиве)
// ❗ Description: Given an array of integers your solution should find the smallest integer.
/*
Example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ❗ Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Для целей этой задачи можно предположить, что предоставленный массив не будет пустым.

const givenArray_1 = [17, 33, 1, 2, 3, 75, 4, -5, 24, 6, 256]
const givenArray_2 = [78, 56, 232, 12, 8]

function givenMinValue(array) {
  let minValue = array[0];
  for (let index = 0; index < array.length; index++) {
    if(minValue > array[index]) {
      minValue = array[index]
    }
  }
  return minValue
}

console.log(givenMinValue(givenArray_2))