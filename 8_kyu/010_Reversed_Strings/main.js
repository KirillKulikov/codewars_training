// ✅ Reversed Strings (Перевернутые Строки)
// ❗ Description: Complete the solution so that it reverses the string passed into it.

/*
Example:
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// ❗ Завершите решение так, чтобы оно перевернуло переданную в него строку.

const userStr = "words"
let userStrRevers = "";

for (let index = (userStr.length - 1); index >= 0; index--) {
    userStrRevers += userStr[index];
}
console.log(userStrRevers);
