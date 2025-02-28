// ✅ Convert an array of strings to array of numbers (Преобразует массив строк в массив чисел)
// ❗ Description: Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// Note that you can receive floats as well.

/*
Examples:
    ie:["1", "2", "3"] to [1, 2, 3]
*/
// ❗ Какой-то очень забавный веб-разработчик передал вам последовательность чисел из своего ответа API в виде последовательности строк!
// Вам нужно привести весь массив к правильному типу.
// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит последовательность чисел.
// Обратите внимание, что вы также можете получать значения с плавающей запятой.

const userDataString = ["3", "7", "25"]


function convertArrayStrToNum(array) {
    const userDataNumber = []
    for (let index = 0; index < array.length; index++) {
        let element = Number(array[index]);
        userDataNumber.push(element)
    }
    return userDataNumber;
}

console.log(convertArrayStrToNum(userDataString))

/*
* Решения задачи
* №1
function toNumberArray(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
    arr.push(+str[i]);
  }
  return arr;
}

* №2
function toNumberArray(stringarray){
  let arr = [];
  for (let i = 0; i < stringarray.length; i++) {
    arr.push(Number(stringarray[i]));
  }
  return arr;
}

*/