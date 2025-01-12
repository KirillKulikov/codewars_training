// ✅ Counting sheep... (Подсчет овец...)
// ❗ Description: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

/*
For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

*/
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// ❗ Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать. Нам нужна функция, которая подсчитывает количество овец в массиве (истина означает наличие). Правильным ответом было бы 17.

// Подсказка: не забудьте проверить наличие недопустимых значений, таких как null/undefined

const sheepArray = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true,
  null, undefined, ]

console.log(sheepArray);


  function countSheep(array) {
    let countSheeps = 0;
    for (let index = 0; index < array.length; index++) {

      // array[index] === true ? countSheeps++ : countSheeps;

      if(array[index]) {
        countSheeps = countSheeps + 1; // array[index] === true ? countSheeps++ : countSheeps;
      }  
    }
    return countSheeps;
  }

  console.log(countSheep(sheepArray));