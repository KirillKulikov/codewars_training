// https://www.codewars.com/kata/571f1eb77e8954a812000837

// ✅ Training JS #5: Basic data types--Object (Обучение JS # 5: Основные типы данных-Object)
// ❗ Description: Task
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.

// ❗ Задача
// Даю вам функцию, animal принимающую 1 параметр: obj вот так:

// {name:"dog",legs:4,color:"white"}
// и верните строку, подобную этой:

// "This white dog has 4 legs."
// Когда вы закончите работу, нажмите «Запустить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код и пройти это задание.

const animal = {
    name: "dog",
    legs: 4,
    color: "white",
}

function animalDescription(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }

console.log(animalDescription(animal));
