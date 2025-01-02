// ✅ Array plus array (Массив плюс массив)
// ❗ Description: I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// ❗ Я новичок в программировании и сейчас хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду признателен за вашу помощь.
// P.S. Каждый массив содержит только целые числа. Результат тоже является числом.

const userSumArray_1 = [17, 33, 1, 2]
const userSumArray_2 = [78, 56, 23, 12, 8]

let sumArray = 0;

function arrayPlusArray(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let index = 0; index < array1.length; index++) {
       sum1 += array1[index]
    }

    for (let index = 0; index < array2.length; index++) {
        sum2 += array2[index]
    }

    return sum1 + sum2
}

console.log(arrayPlusArray(userSumArray_1, userSumArray_2));
