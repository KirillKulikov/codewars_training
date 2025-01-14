// ✅ Get the Middle Character (Получаем Средний символ)
// ❗ Description: You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

/*
Examples:
    "test" --> "es"
    "testing" --> "t"
    "middle" --> "dd"
    "A" --> "A"
*/
// ❗ Вам будет дана непустая строка. Ваша задача — вернуть средний символ (символы) строки.

// Если длина строки нечётная, верните средний символ.
// Если длина строки чётная, верните два средних символа.

const strVar = 'middlezsdgz;ljczxkx[p';


function chapterForStr(str) {
    let newStr = '';
    if ((str.length % 2) === 0) {
        newStr = str[str.length / 2 - 1] + str[str.length / 2]
        console.log('chetnoe')
    } else {
        newStr = str[(str.length + 1) / 2 - 1]
        console.log('nechetnoe')
    }
    return newStr;
}
console.log(chapterForStr(strVar));
