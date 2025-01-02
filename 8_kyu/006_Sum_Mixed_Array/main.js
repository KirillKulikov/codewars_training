// ✅ Sum Mixed Array (Сумма Смешанного массива)

// ❗ Description: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// ❗ Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.

const sumArray_1 = [1, 2, 3, "75", 4, 5, "24", 6]

// проверка массива на числа и возвращение числового массива
function findNumberInArray(array) {
  let numberinArray = [];
  for (let index = 0; index < array.length; index++) {
    // console.log(typeof(array[index]));
      numberinArray.push(+array[index])
    
  }
  return numberinArray;
}

console.log(findNumberInArray(sumArray_1))

// сумма всех элементов массива
function sumElementInArray(array) {
  let sumResult = 0;
  for (let index = 0; index < array.length; index++) {
    sumResult = sumResult + (+array[index]);  
  }
  return sumResult
}

console.log(sumElementInArray(sumArray_1))