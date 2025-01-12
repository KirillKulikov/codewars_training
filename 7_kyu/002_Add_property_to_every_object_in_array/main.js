// ✅ Add property to every object in array (Добавить свойство к каждому объекту в массиве)
// ❗ Description: Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

/*
Example:
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
*/

// After adding the property the result should be:
/*
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/
// The questions array is already defined for you and is not the same as the one in the example.

// ❗ Ваша задача — добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение usersAnswer должно быть равно null. Решение должно работать для массивов любой длины.
// Массив questions уже определен для вас и не совпадает с тем, что в примере.
const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (let index = 0; index < questions.length; index++) {
    let newKey = questions[index];
    newKey.usersAnswer = null;
  }
  console.log(questions);