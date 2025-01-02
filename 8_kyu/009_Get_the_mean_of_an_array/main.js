// ✅ Get the mean of an array (Получаем среднее значение массива)
// ❗ Description: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// ❗ Это конец учебного года, судьбоносный момент для вашего школьного отчёта. Нужно подсчитать средние баллы. Все ученики приходят к вам и просят подсчитать их средние баллы. Легко! Вам просто нужно написать сценарий.
// Верните среднее значение заданного массива, округлённое вниз до ближайшего целого числа.
// Массив никогда не будет пустым.

const userMarks = [2,2,2,2]

function userMiddleMark(array) {
    let sumMarks = 0;
    let middle = 0;
    for (let index = 0; index < array.length; index++) {
        sumMarks += array[index];
    }
    let middleMark = Math.floor(sumMarks / array.length)
    return middleMark;
}
console.log(userMiddleMark(userMarks));
