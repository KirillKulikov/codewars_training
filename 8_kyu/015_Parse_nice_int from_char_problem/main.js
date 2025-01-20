// ✅ Parse nice int from char problem (Проблема с синтаксическим анализом nice int из char)
// ❗ Description: You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// ❗ Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда отвечает: «x лет», где x — случайное число от 0 до 9.
// Напишите программу, которая возвращает возраст девочки (от 0 до 9) в виде целого числа.
// Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовая входная строка может быть «1 год» или «5 лет». Первый символ в строке всегда является числом.


function aboutAge() {
    let getAge = Math.floor(Math.random() * 10);
    let getStr = '';
    if (getAge === 0 || getAge > 4) {
        getStr = 'лет'
    } else if (getAge === 1)  {
        getStr = 'год'
    } else {
        getStr = 'года'
    }

    return `${getAge} ${getStr}`
}

// console.log(aboutAge())

let girlAge = aboutAge();
console.log(Number(girlAge.slice(0, 1)))

/*
* Решения задачи
* №1
function getAge(inputString){
  return parseInt(inputString);
}

* №2
function getAge(inputString){
  return +inputString[0];
}

* №3
function getAge(inputString){
  let res = inputString.split(' ');
  for (let i in res) {
    return res[i] != NaN ? +res[i] : '';
  }
}

* №4
function getAge(inputString){
  return inputString.match(/[0-9]/)[0] * 1;
}

*/