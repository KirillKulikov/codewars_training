// ✅ Convert a Number to a String! (Преобразуйте число в строку!)
// ❗ Description: We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

/*
Examples:
    123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// ❗ Нам нужна функция, которая может преобразовывать число (целое) в строку.
// Какие способы достижения этой цели вы знаете?

const userNumber = -12345;

function convertNomberToStr(num) {
    return String(num)
}

console.log(typeof convertNomberToStr(userNumber));

/*
* Решения задачи
* №1
function numberToString(num) {
  return num.toString();
}

* №2
function numberToString(num) {
  return ''+num;
}

* №3
const numberToString = num => `${num}`;

* №4
function numberToString(num) {
  return `${num}`;
}

*/